import { useContext, useEffect, useState, useRef } from 'react';
import { AvailabilityContext } from '../context/AvailabilityContext.jsx';
import { API_BASE } from '../config.js';

function Button({ children, onClick, disabled = false, className = '' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-1 px-5 py-2 rounded-2xl font-medium shadow-md transition 
        ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.02]'} 
        bg-gradient-to-r from-indigo-500 to-purple-500 text-white ${className}`}
    >
      {children}
    </button>
  );
}

export default function Booking() {
  const { availableTables, setAvailableTables } = useContext(AvailabilityContext);

  const [timeSlot, setTimeSlot] = useState('');
  const [selected, setSelected] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState(null);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  const firstFetchDone = useRef(false);

  // Fetch availability
  useEffect(() => {
    if (!timeSlot) {
      setAvailableTables([]);
      setSelected(null);
      return;
    }
    const fetchAvailability = async () => {
      try {
        setLoadingAvailability(true);
        setStatus(null);
        const resp = await fetch(
          `${API_BASE}/booking/available?timeSlot=${encodeURIComponent(timeSlot)}`
        );
        const data = await resp.json();
        if (!resp.ok) throw new Error(data.error || 'Failed to load availability');

        // Attach requestedTimeSlot
        const enrichedRaw = data.available.map((t) => ({
          ...t,
          requestedTimeSlot: timeSlot,
        }));

        // Deduplicate by table_id
        const deduped = Array.from(new Map(enrichedRaw.map(t => [t.table_id, t])).values());
        setAvailableTables(deduped);

        // Only reset selection after the first fetch
        if (firstFetchDone.current) {
          if (selected && !deduped.some(t => t.table_id === selected.table_id)) {
            setSelected(null);
          }
        } else {
          firstFetchDone.current = true;
        }
      } catch (err) {
        setStatus({ type: 'error', message: err.message });
      } finally {
        setLoadingAvailability(false);
      }
    };
    fetchAvailability();
  }, [timeSlot, setAvailableTables]);

  // Handle booking
  const handleBooking = async () => {
    if (!selected) {
      setStatus({ type: 'error', message: 'Please select a table.' });
      return;
    }
    if (!timeSlot) {
      setStatus({ type: 'error', message: 'Please choose date & time.' });
      return;
    }
    if (!userName || !userEmail) {
      setStatus({ type: 'error', message: 'Name and email are required.' });
      return;
    }

    const payload = {
      table_id: selected.table_id,
      timeSlot,
      userEmail,
      userName,
    };

    try {
      setBookingLoading(true);
      setStatus({ type: 'info', message: 'Submitting booking...' });

      const resp = await fetch(`${API_BASE}/booking/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();

      if (!resp.ok) {
        setStatus({ type: 'error', message: data.error || 'Booking failed' });
        return;
      }

      if (data.emailStatus?.user === 'sent') {
        setStatus({ type: 'success', message: ' Booking confirmed! Confirmation email sent.' });
      } else if (data.emailStatus) {
        setStatus({ type: 'warning', message: ' Booking confirmed, but email failed to send.' });
      } else {
        setStatus({ type: 'success', message: ' Booking confirmed!' });
      }

      // Remove booked table from list
      setAvailableTables(prev =>
        prev.filter(t => !(t.table_id === selected.table_id && t.requestedTimeSlot === timeSlot))
      );
      setSelected(null);
    } catch (err) {
      setStatus({ type: 'error', message: `Network error: ${err.message}` });
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left panel */}
        <div className="flex-1 space-y-6">
          {/* Slot picker */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h1 className="text-3xl font-bold mb-2">Reserve a Table</h1>
            <p className="text-gray-600">Pick your preferred date & time and choose from available tables.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="font-medium mb-1">Date & Time</label>
                <input
                  type="datetime-local"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="font-medium mb-1">Selected Slot</label>
                <div className="px-4 py-2 bg-gray-50 border rounded-lg">
                  {timeSlot
                    ? new Date(timeSlot).toLocaleString()
                    : <span className="text-gray-400">No slot chosen</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Tables */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Available Tables</h2>
              {loadingAvailability && <div className="text-xs text-gray-500">Refreshing...</div>}
            </div>

            {status?.type === 'error' && (
              <div className="mb-3 px-4 py-2 bg-red-100 text-red-800 rounded">{status.message}</div>
            )}

            {timeSlot && availableTables.length === 0 && !loadingAvailability && (
              <div className="text-center py-10 text-gray-500">No tables available for this slot.</div>
            )}

            <div className="grid gap-4">
              {availableTables.map(t => (
                <div
                  key={t.table_id}
                  onClick={() => setSelected({ ...t, table_id: String(t.table_id) })}
                  className={`p-5 rounded-2xl border cursor-pointer transition
                    ${selected?.table_id === t.table_id ? 'ring-2 ring-indigo-500 shadow-lg' : 'shadow hover:shadow-xl'}`}
                >
                  <div className="flex justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">Table {t.table_id}</span>
                        <span className="px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded-full">{t.type || '—'}</span>
                      </div>
                      <div className="text-sm text-gray-600">Capacity: {t.capacity}</div>
                      <div className="text-sm text-gray-600">Location: {t.location}</div>
                    </div>
                    {selected?.table_id === t.table_id && <span className="text-indigo-600 text-xs">Selected</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-full md:w-[420px] space-y-6">
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Your Details</h2>
            {status && status.type !== 'error' && (
              <div className={`px-4 py-2 rounded ${status.type === 'success' ? 'bg-green-100 text-green-800' : status.type === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                {status.message}
              </div>
            )}
            <input
              type="text"
              placeholder="Your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="you@example.com"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <div className="px-4 py-2 border rounded-lg bg-gray-50">
              {selected ? `Table ${selected.table_id} (${selected.type})` : 'Choose a table'}
            </div>
            <div className="px-4 py-2 border rounded-lg bg-gray-50">
              {timeSlot ? new Date(timeSlot).toLocaleString() : 'Select date/time'}
            </div>
            <Button onClick={handleBooking} disabled={bookingLoading || !selected || !timeSlot}>
              {bookingLoading ? 'Booking...' : 'Confirm Reservation'}
            </Button>
            {status?.type === 'error' && <div className="px-4 py-2 bg-red-100 text-red-800 rounded">{status.message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

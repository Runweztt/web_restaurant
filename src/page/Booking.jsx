import { useContext, useEffect, useState } from 'react';
import { AvailabilityContext } from '../context/AvailabilityContext.jsx';

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

  const [timeSlot, setTimeSlot] = useState(''); // datetime-local string
  const [selected, setSelected] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState(null); // { type: 'success'|'warning'|'error'|'info', message }
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  // Fetch availability and dedupe by table_id
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
          `http://localhost:5000/booking/available?timeSlot=${encodeURIComponent(
            timeSlot
          )}`
        );
        const data = await resp.json();
        if (!resp.ok) throw new Error(data.error || 'Failed to load availability');

        // Attach requestedTimeSlot
        const enrichedRaw = data.available.map((t) => ({
          ...t,
          requestedTimeSlot: timeSlot,
        }));

        // Deduplicate by table_id (keep first occurrence)
        const map = new Map();
        for (const t of enrichedRaw) {
          if (!map.has(t.table_id)) {
            map.set(t.table_id, t);
          }
        }
        const deduped = Array.from(map.values());
        setAvailableTables(deduped);

        // Reset selection if it's no longer in the current deduped list
        if (
          selected &&
          !(deduped.some((t) => t.table_id === selected.table_id))
        ) {
          setSelected(null);
        }
      } catch (err) {
        setStatus({ type: 'error', message: err.message });
      } finally {
        setLoadingAvailability(false);
      }
    };
    fetchAvailability();
  }, [timeSlot, setAvailableTables]);

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

      const resp = await fetch('http://localhost:5000/booking/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();

      if (!resp.ok) {
        setStatus({ type: 'error', message: data.error || 'Booking failed' });
        return;
      }

      if (data.emailStatus) {
        if (data.emailStatus.user === 'sent') {
          setStatus({
            type: 'success',
            message: '✅ Booking confirmed! Confirmation email sent.',
          });
        } else {
          setStatus({
            type: 'warning',
            message: '✅ Booking confirmed, but email failed to send.',
          });
        }
      } else {
        setStatus({ type: 'success', message: '✅ Booking confirmed!' });
      }

      // Remove booked table from availability
      setAvailableTables((prev) =>
        prev.filter(
          (t) =>
            !(
              t.table_id === selected.table_id &&
              t.requestedTimeSlot === timeSlot
            )
        )
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
          <div className="bg-white rounded-2xl shadow p-6">
            <h1 className="text-3xl font-bold mb-2">Reserve a Table</h1>
            <p className="text-gray-600">
              Pick your preferred date & time and choose from available tables.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <label className="font-medium mb-1">Date & Time</label>
                <input
                  type="datetime-local"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Selected Slot</label>
                <div className="px-4 py-2 bg-gray-50 rounded-lg border">
                  {timeSlot ? (
                    <span className="text-sm">{new Date(timeSlot).toLocaleString()}</span>
                  ) : (
                    <span className="text-sm text-gray-400">No slot chosen</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Available Tables</h2>
              {loadingAvailability && (
                <div className="text-xs text-gray-500">Refreshing...</div>
              )}
            </div>

            {status && status.type === 'error' && (
              <div className="mb-3 px-4 py-2 bg-red-100 text-red-800 rounded-md flex items-center gap-2">
                <div className="font-semibold">Error:</div> <div>{status.message}</div>
              </div>
            )}

            {timeSlot && availableTables.length === 0 && !loadingAvailability && (
              <div className="text-center py-10 text-gray-500">
                No tables available for this slot.
              </div>
            )}

            <div className="grid gap-4">
              {availableTables.map((t) => (
                <div
                  key={t.table_id}
                  onClick={() => setSelected(t)}
                  className={`
                    relative flex justify-between items-center p-5 rounded-2xl border transition-shadow cursor-pointer
                    ${selected && selected.table_id === t.table_id ? 'ring-2 ring-indigo-500 shadow-lg' : 'shadow'}
                    hover:shadow-xl
                  `}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-semibold">Table {t.table_id}</div>
                      <div className="px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-700">
                        {t.type || '—'}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Capacity: <span className="font-medium">{t.capacity}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Location: <span className="font-medium">{t.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-green-600 font-bold">Available</div>
                    {selected && selected.table_id === t.table_id && (
                      <div className="text-xs mt-1 text-indigo-600 font-semibold">
                        Selected
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-full md:w-[420px] flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Your Details</h2>
            {status && status.type !== 'error' && (
              <div
                className={`
                  mb-2 px-4 py-2 rounded-md flex items-center gap-2
                  ${status.type === 'success' ? 'bg-green-100 text-green-800' : ''}
                  ${status.type === 'warning' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${status.type === 'info' ? 'bg-blue-100 text-blue-800' : ''}
                `}
              >
                {status.message}
              </div>
            )}
            <div className="flex flex-col gap-3">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Table</label>
                <div className="px-4 py-2 border rounded-lg bg-gray-50">
                  {selected ? (
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Table {selected.table_id}</span>
                      <span className="text-sm text-gray-500">({selected.type})</span>
                    </div>
                  ) : (
                    <span className="text-gray-500">Choose a table</span>
                  )}
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1">Time</label>
                <div className="px-4 py-2 border rounded-lg bg-gray-50">
                  {timeSlot ? (
                    <span>{new Date(timeSlot).toLocaleString()}</span>
                  ) : (
                    <span className="text-gray-500">Select date/time</span>
                  )}
                </div>
              </div>
              <Button onClick={handleBooking} disabled={bookingLoading || !selected || !timeSlot}>
                {bookingLoading ? 'Booking...' : 'Confirm Reservation'}
              </Button>
            </div>
            {status && status.type === 'error' && (
              <div className="mt-1 px-4 py-2 bg-red-100 text-red-800 rounded-md">
                {status.message}
              </div>
            )}
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border rounded-2xl p-5">
            <h3 className="text-lg font-semibold mb-2">Quick Tips</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Pick a future date and time.</li>
              <li>Select a table from the available list.</li>
              <li>Provide your name and a valid email.</li>
              <li>Check your inbox for confirmation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

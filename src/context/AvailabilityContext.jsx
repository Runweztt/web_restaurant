// frontend/src/context/AvailabilityContext.jsx
import { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const AvailabilityContext = createContext();

export function AvailabilityProvider({ children }) {
  const [definitions, setDefinitions] = useState([]); // table definitions from CSV
  const [availableTables, setAvailableTables] = useState([]); // for selected timeSlot
  const [bookings, setBookings] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const s = io('http://localhost:5000'); // adjust origin if different
    setSocket(s);

    s.on('tables:definitions-updated', (defs) => {
      setDefinitions(defs || []);
    });

    s.on('booking:created', ({ booking }) => {
      setBookings((prev) => [...prev, booking]);
      // If current availability includes that booked table for same slot, remove it
      setAvailableTables((prev) =>
        prev.filter(
          (t) =>
            !(
              t.table_id === booking.table_id &&
              booking.timeSlot === t.requestedTimeSlot // see Booking.jsx usage
            )
        )
      );
    });

    return () => {
      s.disconnect();
    };
  }, []);

  return (
    <AvailabilityContext.Provider
      value={{
        definitions,
        availableTables,
        setAvailableTables,
        bookings,
        socket,
      }}
    >
      {children}
    </AvailabilityContext.Provider>
  );
}

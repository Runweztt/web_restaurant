// frontend/src/context/AvailabilityContext.jsx
import { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { SOCKET_URL } from '../config'; 

export const AvailabilityContext = createContext();

export function AvailabilityProvider({ children }) {
  const [definitions, setDefinitions] = useState([]); 
  const [availableTables, setAvailableTables] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Use environment variable or fallback URL
    const s = io(SOCKET_URL);
    setSocket(s);

    s.on('tables:definitions-updated', (defs) => {
      setDefinitions(defs || []);
    });

    s.on('booking:created', ({ booking }) => {
      setBookings((prev) => [...prev, booking]);
      // Remove booked table from availability if it matches current view
      setAvailableTables((prev) =>
        prev.filter(
          (t) =>
            !(
              t.table_id === booking.table_id &&
              booking.timeSlot === t.requestedTimeSlot
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

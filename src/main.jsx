import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AvailabilityProvider } from './context/AvailabilityContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AvailabilityProvider>
      <App />
    </AvailabilityProvider>
  </StrictMode>
);

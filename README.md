#  Restaurant App (Frontend)

This is the **React + Tailwind CSS** frontend for the **Web Restaurant** booking system.  
It allows users to browse UK dishes, check table availability, make bookings, and receive real-time updates powered by Socket.IO.

The app connects to the [Restaurant Backend]for data, bookings, and live events.

---

##  Live Demo

- **Frontend:** https://web-restaurant-omega.vercel.app  
- **Backend API:** https://web-restaurant-backend.onrender.com  

---

##  Features

- **Restaurant Menu** display with detailed information.
- **Table Booking System** connected to backend API.
- **Real-Time Availability Updates** via Socket.IO.
- **Admin Panel** for uploading CSV table definitions.
- **Responsive UI** optimized for desktop and mobile.
- **Search and Filter** for menu items.
- **Loading States** for better UX.
- **Modern Gradient UI** with TailwindCSS.

---

##  Tech Stack

| Tech         | Description                                  |
|--------------|----------------------------------------------|
| React        | Frontend library for building UI             |
| Tailwind CSS | Utility-first CSS styling framework          |
| Vite         | Fast build tool for modern frontend apps     |
| JavaScript   | Application logic and API handling           |
| Socket.IO    | Real-time updates for availability/bookings  |
| PapaParse    | CSV parsing for admin table uploads          |
| Vercel       | Deployment & hosting for the frontend        |

---

##  Folder Structure

```bash
frontend/
├── public/                       # Static assets
├── src/
│   ├── components/               # Reusable UI components
│   ├── context/                   # Context providers (AvailabilityContext)
│   ├── pages/                     # Page-level components (Booking, AdminPanel)
│   ├── config.js                  # API & Socket URL configuration
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md

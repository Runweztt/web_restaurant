import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import Home from './page/Home';
import About from './page/About';
import Booking from './page/Booking';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="booking" element={<Booking />} />
      <Route path="booking/:type" element={<Booking />} />
    </Route>
  ),
  // {
  //   basename: '/cleaningweb', // ✅ This is critical for subfolder deployments
  // }
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

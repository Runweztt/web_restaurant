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
import Login from './page/Login';
import Menu from './page/Menu';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="booking" element={<Booking />} />
      <Route path="booking/:type" element={<Booking />} />
      <Route path="login" element={<Login />} />
      <Route path="menu" element={<Menu />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;

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
import AdminUpload from './page/AdminUpload';

import { Navigate } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="booking" element={<Booking />} />
      <Route path="booking/:type" element={<Booking />} />
      <Route path="login" element={<Login />} />
      <Route path="menu" element={<Menu />} />
      <Route path="admin/upload" element={<AdminUpload />} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Route>
  ),
  {
    basename: '/web_restaurant',
  }
);



const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

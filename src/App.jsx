import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Rootlayout from './layout/Rootlayout';
import Home from './page/Home';
import About from './page/About';
import Booking from './page/Booking';
import Login from './page/Login';
import Menu from './page/Menu';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'booking', element: <Booking /> },
        { path: 'booking/:type', element: <Booking /> },
        { path: 'login', element: <Login /> },
        { path: 'menu', element: <Menu /> },
      ],
    },
  ],
  {
    basename: '/web_restaurant', 
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

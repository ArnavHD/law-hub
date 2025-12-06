import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import Home from '../Components/Home/Home';
import LawerDetails from '../Components/LawerDetails/LawerDetails';
import Bookings from '../Components/Bookings/Bookings';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        loader: () => fetch("./LawerData.json"),
        Component: Home,
      },
      {
        path: "/my-booking",
        Component: Bookings,
      },
      {
        path: "/blogs",
        element: <div>Hello This is blogs</div>,
      },
      {
        path: "/contact-us",
        element: <div>Hello This is contact</div>,
      },
      {
        path: "/lawer-detail/:lawId",
        loader: ()=> fetch("LawerData.json"),
        Component: LawerDetails,
      }
    ],
  },
]);
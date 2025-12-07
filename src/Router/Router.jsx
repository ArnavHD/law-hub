import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import Home from '../Components/Home/Home';
import LawerDetails from '../Components/LawerDetails/LawerDetails';
import Bookings from '../Components/Bookings/Bookings';
import BookingContainer from '../Components/BookingContainer/BookingContainer';
import Error from '../Components/Error/Error';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // loader: () => fetch("/LawerData.json"),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("/LawerData.json"),
        Component: Home,
      },
      {
        path: "/my-booking",
        loader: ()=>fetch("/LawerData.json"),
        Component: BookingContainer,
      },
      {
        path: "/blogs",
        element: <div>Hello This is blogs</div>,
      },
      {
        path: "/contact-us",
        element: <Error></Error>,
      },
      {
        path: "/lawer-detail/:lawId",
        loader: () => fetch("/LawerData.json"),
        Component: LawerDetails,
      },
    ],
  },
]);
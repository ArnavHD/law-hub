import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import Home from '../Components/Home/Home';

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
        element: <div>Hello This is booking time</div>,
      },
      {
        path: "/blogs",
        element: <div>Hello This is blogs</div>,
      },
      {
        path: "/contact-us",
        element: <div>Hello This is contact</div>,
      },
    ],
  },
]);
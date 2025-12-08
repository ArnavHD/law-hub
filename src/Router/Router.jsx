import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import Home from '../Components/Home/Home';
import LawerDetails from '../Components/LawerDetails/LawerDetails';
import Bookings from '../Components/Bookings/Bookings';
import BookingContainer from '../Components/BookingContainer/BookingContainer';
import Error from '../Components/Error/Error';
import Blogs from '../Components/Blogs/Blogs';

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
        loader: () => fetch("/LawerData.json"),
        Component: BookingContainer,
      },
      // {
      //   path: "/blogs",
      //   loader: ()=> fetch("/public/BlogsData.json"),
      //   element: <Blogs></Blogs>,
      // },
      // {
      //   path: "/contact-us",
      //   element: <Error></Error>,
      // },
      {
        path: "/lawer-detail/:lawId",
        // loader: () => fetch("/LawerData.json"),
        loader:async ({params})=>{
          const data = await fetch("/LawerData.json").then(res=>res.json());
          console.log(data);
          if(data.find(lawer=>lawer.id == params.lawId)){
            return data.find((lawer) => lawer.id == params.lawId);
          }
          else{
            return params.lawId;
          }
          // return data.find(lawer=>lawer.id == params.lawId);
        },
        Component: LawerDetails,
      },
      // {
      //   path: "/lawer-detail/*",
      //   element: <div>No no don't do that</div>
      // },
    ],
  },
  {
    path: "/blogs",
    loader: () => fetch("/BlogsData.json"),
    element: <Blogs></Blogs>,
  },
  {
    path: "/contact-us",
    element: <Error></Error>,
  },
  // {
  //   path: "*",
  //   element: <div>No no don't do that</div>,
  // },
]);
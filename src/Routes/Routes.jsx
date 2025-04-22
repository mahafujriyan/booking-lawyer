import React, { Children, Component } from 'react';

import {createBrowserRouter} from "react-router";

import Roots from '../Roots/Roots';
import Home from '../Home/Home';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Cards from '../Pages/Cards/Cards';
import LawyersDetails from '../Pages/LawyersDetails/LawyersDetails';
import Blogs from '../Pages/Blogs/Blogs';
import Contacts from '../Pages/Contacts/Contacts';
import Bookings from '../Booksing/Bookings/Bookings';
import { getAppoint } from '../Utility/Index';

  export const router = createBrowserRouter([
    {
      path: "/",
   Component:Roots,
   errorElement:<ErrorPages/>,
   children:[
    {
      
      path:"/",
     element:<Home/>,
     hydrateFallbackElement:<p>Loading, please wait</p>,
   loader:()=>fetch('../lawyers.json')
     

    },
    {
      path:'/lawyers-details/:id',
      element:<LawyersDetails/>,
      loader:()=>fetch('../lawyers.json')

     
    },
    {
      path:'/blogs',
      element:<Blogs></Blogs>,
      loader:()=>fetch('../blogs.json')
      
    },
    {
      path:'/contacts',       
      element:<Contacts></Contacts>

    },
    {
      path:'/bookings',
      element:<Bookings/>,
      loader:()=>fetch('../lawyers.json') 
    }
   
    
  ]

    },
     { path: '*', element: <ErrorPages /> }
    
  ]);
 
import React, { Children, Component } from 'react';

import {createBrowserRouter} from "react-router";

import Roots from '../Roots/Roots';
import Home from '../Home/Home';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Cards from '../Pages/Cards/Cards';
import LawyersDetails from '../Pages/LawyersDetails/LawyersDetails';
import Blogs from '../Pages/Blogs/Blogs';
import Contacts from '../Pages/Contacts/Contacts';

  export const router = createBrowserRouter([
    {
      path: "/",
   Component:Roots,
  //  errorElement:<ErrorPages/>,
   children:[
    {
      
      path:"/",
     element:<Home/>,
   loader:()=>fetch('../lawyers.json')
     

    },
    {
      path:'/lawyers-details/:id',
      element:<LawyersDetails/>,
      loader:()=>fetch('/lawyers.json')
    },
    {
      path:'/blogs',
      element:<Blogs></Blogs>,
      loader:()=>fetch('/blogs.json')
      
    },
    {
      path:'/contacts',
      element:<Contacts></Contacts>

    }
   
    
  ]

    },
    { path: '*', element: <ErrorPages /> }
    
  ]);
 
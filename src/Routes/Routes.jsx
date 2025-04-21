import React, { Children, Component } from 'react';

import {createBrowserRouter} from "react-router";

import Roots from '../Roots/Roots';
import Home from '../Home/Home';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Cards from '../Pages/Cards/Cards';

  export const router = createBrowserRouter([
    {
      path: "/",
   Component:Roots,
   errorElement:<ErrorPages/>,
   children:[
    {
      
      path:"/",
     element:<Home/>,
   loader:()=>fetch('lawyers.json')
     

    },
   
    
  ]

    },
    
  ]);
 
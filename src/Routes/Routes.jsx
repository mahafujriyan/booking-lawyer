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
import DynamicError from '../Pages/DynamicError/DynamicError';


  export const router = createBrowserRouter([
    {
      path: "/",
 element:<Roots/>,
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
      loader:async({params})=>{
        const id=parseInt(params.id)
        if(isNaN(id)||id.toString()!==params.id){
          throw new Response(null,{status: 404,
            statusText:`Invalid Id : ${params.id}`
          })

        }
        const res= await fetch('../lawyers.json')
        const data = await res.json();
        const singleLawyer = data.find((lawyer) => lawyer.id ===id );
        if(!singleLawyer){
          throw new Response(null,{status: 404,
            statusText:`No lawyer Found with this Id ${params.id}`
          })
  
      }
      return singleLawyer
      },
     errorElement:<DynamicError/>

     
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
      hydrateFallbackElement:<p>Loading, please wait</p>,
      loader:()=>fetch('../lawyers.json') 
    }
   
    
  ]

    },
  
    
  ]);
 
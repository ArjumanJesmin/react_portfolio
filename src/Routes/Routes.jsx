import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Home/Home";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
            {
              path:'/',
              element:<Home/>  
            },
            {
              path:'/hero',
              element:<Hero/>  
            },
            {
              path:'/about',
              element:<About/>  
            },
            {
                path:'/experience',
                element:<Experience/>  
              },
            {
                path:'/projects',
                element:<Projects/>  
              },
            {
                path:'/contact',
                element:<Contact/> 
              },
        ]
    },
]);
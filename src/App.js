import React from 'react'
import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from'./Components/Portfolio/Portfolio';
import Home from './Components/Home/Home';
export default function App() {

  let routes=createBrowserRouter(
    [{path:"",element:<LayOut/>,children:[
      {path:"",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>}
      
    ]
  }
    ])
  return <RouterProvider router ={routes}></RouterProvider>
  
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider } from "react-router-dom";
import { router } from "./routes/Index.jsx";
import './index.css'
import { UserContextProvider } from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  < UserContextProvider >
    <RouterProvider router={router} />
  </UserContextProvider>
  
)

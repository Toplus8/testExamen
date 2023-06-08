import React, { useContext } from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LayoutPublic from "../layout/Layoutpublic";
import Error from "../pages/Error";
import Cats from "../pages/Cats";
import {userContext} from '../context/UserContext'

/*const [user, setUser] = useContext(userContext)*/

export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/cats", element: <Cats /> },
    ],
  },
]);

/*element: /*isLogin*//*false ? <Cats />: <LayoutPublic />,*/
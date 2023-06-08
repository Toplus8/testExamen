import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LayoutPublic from "../layout/Layoutpublic";
import Error from "../pages/Error";
import Cats from "../pages/Cats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: /*isLogin*/true ? <Cats />: <LayoutPublic />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/cats", element: <Cats /> },
    ],
  },
]);
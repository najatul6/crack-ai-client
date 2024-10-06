import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GeneratePainting from "../pages/GeneratePainting";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path:"/generate",
        element: <GeneratePainting/>,
      },
{
  path:"/replies",
  element:<PrivateRoute><Replies/></PrivateRoute>
},
      {
        path: "registration",
        element: <Register/>,
      },
    ],
  },
]);

export default MainRoutes;
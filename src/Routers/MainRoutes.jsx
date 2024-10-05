import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
        path: "paintings",
        element: <Paintings/>,
        loader: () => fetch("http://localhost:5000/api/v1/paintings"),
      },
      {
        path: "generate",
        element: (
          <PrivateRoute>
            <Generate/>
          </PrivateRoute>
        ),
      },
      {
        path: "/paintings/:id",
        element: (
          <PrivateRoute>
            <PaintingDetails/>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/paintings/${params.id}`),
      },
      {
        path: "registration",
        element: <Register/>,
      },
    ],
  },
]);

export default MainRoutes;
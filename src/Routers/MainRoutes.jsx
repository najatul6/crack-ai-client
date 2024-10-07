import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GeneratePainting from "../pages/GeneratePainting";
import PrivateRoute from "./PrivateRoute";
import Replies from "../pages/Replies";
import Paintings from "../pages/Paintings";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/generate",
        element: <GeneratePainting />,
      },
      {
        path: "/replies",
        element: (
          <PrivateRoute>
            <Replies />
          </PrivateRoute>
        ),
      },
      {
        path: "/paintings",
        element: (
          <PrivateRoute>
            <Paintings />
          </PrivateRoute>
        ),
      },
      {
        path: "/paintings/:id",
        element: (
          <PrivateRoute>
            <Paintings/>
          </PrivateRoute>
        ),
        loader:({params})=>fetch(`http://localhost:5000/paintings/${params.id}`)
      },
      {
        path: "registration",
        element: <Register />,
      },
    ],
  },
]);

export default MainRoutes;

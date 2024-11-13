import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "./pages/requireAuth/RequireAuth";
import Home from "./pages/home/Home";
import User from "./pages/users/User";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;

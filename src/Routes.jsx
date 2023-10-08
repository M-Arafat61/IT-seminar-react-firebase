import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SessionDetails from "./pages/SessionDetails/SessionDetails";
import RegisteredSessions from "./pages/MySessions/RegisteredSessions";
import SeminarConcert from "./pages/MoonLightMelodies/SeminarConcert";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivateDetails from "./PrivateRoutes/PrivateDetails";
import PrivateRegistration from "./PrivateRoutes/PrivateRegistration";
import PrivateConcert from "./PrivateRoutes/PrivateConcert";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/techtalk.json"),
      },
      {
        path: "/session-details/:id",
        element: (
          <PrivateDetails>
            <SessionDetails></SessionDetails>
          </PrivateDetails>
        ),
        loader: () => fetch("/techtalk.json"),
      },
      {
        path: "/registered-sessions",
        element: (
          <PrivateRegistration>
            <RegisteredSessions></RegisteredSessions>
          </PrivateRegistration>
        ),
      },
      {
        path: "/seminar-concert",
        element: (
          <PrivateConcert>
            <SeminarConcert></SeminarConcert>
          </PrivateConcert>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;

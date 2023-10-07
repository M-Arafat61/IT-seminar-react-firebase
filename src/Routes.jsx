import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SessionDetails from "./pages/SessionDetails/SessionDetails";
import RegisteredSessions from "./pages/MySessions/RegisteredSessions";
import SeminarConcert from "./pages/MoonLightMelodies/SeminarConcert";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/session-details/:id",
        element: <SessionDetails></SessionDetails>,
        loader: () => fetch("/techtalk.json"),
      },
      {
        path: "/registered-sessions",
        element: <RegisteredSessions></RegisteredSessions>,
      },
      {
        path: "/seminar-concert",
        element: <SeminarConcert></SeminarConcert>,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import GlobalLayout from "../layouts/Global";
import Home from "../pages/Home";
import ForgotPassword from "../pages/ForgotPassword";
import CallbackComponent from "../components/AccountingCallback";
import ConnectedApps from "../pages/Home/ConnectedApps";
import Customer from "../pages/Customer";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/home",
        element: <GlobalLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "connectedApps",
            element: <ConnectedApps />,
          },
          {
            path: "customer",
            element: <Customer />,
          },
        ],
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/qbo/callback",
        element: <CallbackComponent />,
      },
      {
        path: "/xero/callback",
        element: <CallbackComponent />,
      },
    ],
  },
]);

export default router;

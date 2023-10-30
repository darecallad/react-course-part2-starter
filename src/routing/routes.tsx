import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import User from "./User";
import UserDetail from "./UserDetail";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, //version  6
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "users",
        element: <User />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;

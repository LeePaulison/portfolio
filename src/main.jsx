import React from "react";
import ReactDOM from "react-dom/client";
// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// css
import "./index.css";
// components
import { Root } from "./root";
import { ErrorPage } from "./errorpage";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
// Testing
import { Contact_Testing } from "./pages/contact_testing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    handle: {
      crumbs: () => "Home",
    },
    children: [
      {
        path: "/about",
        element: <About />,
        handle: {
          crumbs: () => "About",
        },
      },
      {
        path: "/contact",
        element: <Contact />,
        handle: {
          crumbs: () => "Contact",
        },
      },
      {
        path: "/testing",
        element: <Contact_Testing />,
        handle: {
          crumbs: () => "Testing",
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// reCaptcha_v3
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
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
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}>
      <RouterProvider router={router} />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);

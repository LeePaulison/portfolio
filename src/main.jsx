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
import { Projects } from "./pages/projects";
import { ToDoList } from "./pages/projects/todo";
import { VideoPlayer } from "./pages/projects/videoplayer";
import { AudioPlayer } from "./pages/projects/audioplayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/projects",
        element: <Projects />,
        children: [
          { path: "/projects/todo", element: <ToDoList /> },
          { path: "/projects/videoplayer", element: <VideoPlayer /> },
          { path: "/projects/audioplayer", element: <AudioPlayer /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

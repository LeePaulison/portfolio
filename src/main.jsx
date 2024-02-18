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
import { ToDo } from "./pages/projects/todo";
import { Edit } from "./components/todo/edit";
import { ToDoItem } from "./components/todo/todoItem";
import { VideoPlayer } from "./pages/projects/videoplayer";
import { AudioPlayer } from "./pages/projects/audioplayer";

import { allToDoLoader, todoLoader } from "./loaders/loaders";
import { createToDoAction } from "./actions/actions";

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
          {
            path: "/projects/todo",
            element: <ToDo />,
            loader: allToDoLoader,
            action: createToDoAction,
            children: [
              { path: "/projects/todo/:todoId/edit", element: <Edit />, action: createToDoAction, loader: todoLoader },
              { path: "/projects/todo/:todoId", element: <ToDoItem />, loader: todoLoader },
            ],
          },
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

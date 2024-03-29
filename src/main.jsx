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
import { ToDo } from "./pages/projects/todo";
import { Create } from "./components/todo/create";
import { Edit } from "./components/todo/edit";
import { ToDoItem } from "./components/todo/todoItem";
import { VideoPlayer } from "./pages/projects/videoplayer";

import { allToDoLoader, todoLoader } from "./loaders/loaders";
import { createToDoAction, updateToDoAction, deleteToDoAction } from "./actions/actions";

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
        path: "/todolist",
        element: <ToDo />,
        handle: {
          crumbs: () => "To Do List",
        },
        loader: allToDoLoader,
        children: [
          {
            path: "/todolist/create",
            element: <Create />,
            handle: {
              crumbs: () => "Create ToDo",
            },
            action: createToDoAction,
          },
          {
            path: "/todolist/:todoId/edit",
            element: <Edit />,
            handle: {
              crumbs: () => "Edit ToDo",
            },
            action: updateToDoAction,
            loader: todoLoader,
          },
          {
            path: "/todolist/:todoId",
            element: <ToDoItem />,
            handle: {
              crumbs: () => `ToDo Item`,
            },
            loader: todoLoader,
          },
          { path: "/todolist/:todoId/destroy", action: deleteToDoAction },
        ],
      },
      {
        path: "/videoplayer",
        element: <VideoPlayer />,
        handle: {
          crumbs: () => "Video Player",
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

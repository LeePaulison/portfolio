import { Outlet, useLoaderData, NavLink } from "react-router-dom";
// components
import { ToDoList } from "../../components/todo/todoList";
import { Navigation } from "../../components/navigation";

const NewToDo = () => (
  <NavLink className='nav-link' to={`/todolist/create`}>
    New ToDo
  </NavLink>
);
export const ToDo = () => {
  const { list } = useLoaderData();

  console.log("Location", location);
  console.log("List", list);

  const addToDoNav = (arr = null) => {
    if (arr === null) return;
    return arr.map((todo) => {
      if (todo.title !== "") {
        return (
          <NavLink key={todo.id} to={`/todolist/${todo.id}`} className='nav-link'>
            {todo.title}
          </NavLink>
        );
      }
    });
  };

  return (
    <div className='flex flex-col md:flex-row h-full'>
      <div className='flex flex-row gap-4 md:flex-col sm:w-full md:h-full md:w-4/12 xl:w-2/12 md:border-r border-stone-300 p-4'>
        {addToDoNav(list)}
        <NewToDo />
      </div>
      <div className='flex flex-col justify-center items-center w-full p-4'>
        <Navigation />
        <div className='grow flex flex-col justify-center items-center w-full'>
          {location.pathname === "/todolist" ? <ToDoList list={list} /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};

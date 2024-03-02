import { Outlet, useLoaderData, Form, NavLink } from "react-router-dom";
// components
import { ToDoList } from "../../components/todo/todoList";

const NewToDo = () => (
  <Form method='post'>
    <button type='submit' className='btn'>
      New ToDo
    </button>
  </Form>
);
export const ToDo = () => {
  const { list } = useLoaderData();

  console.log("List", list);

  return (
    <div className='flex flex-col md:flex-row h-full'>
      <div className='flex flex-row gap-4 md:flex-col sm:w-full md:h-full md:w-4/12 xl:w-2/12 md:border-r border-stone-300 p-4'>
        {list.length > 0 &&
          list.map((todo) => (
            <NavLink key={todo.id} to={`/todolist/${todo.id}`} className='nav-link'>
              {todo.title}
            </NavLink>
          ))}
        <NewToDo />
      </div>
      <div className='flex flex-col justify-center items-center w-full p-4'>
        {location.pathname === "/todolist" ? <ToDoList list={list} /> : <Outlet />}
      </div>
    </div>
  );
};

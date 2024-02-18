import { Outlet, useLoaderData, Form, NavLink } from "react-router-dom";
// components
import { ToDoList } from "../../components/todo/todoList";

const NewToDo = () => (
  <Form method='post'>
    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      New ToDo
    </button>
  </Form>
);
export const ToDo = () => {
  const { list } = useLoaderData();

  console.log("List", list);

  return (
    <div className='flex sm:flex-col md:flex-row h-full'>
      <div className='flex sm:flex-row md:flex-col sm:w-full md:h-full md:w-2/12 md:border-r border-stone-300 p-4'>
        <NewToDo />
        {list.length > 0 &&
          list.map((todo) => (
            <NavLink key={todo.id} to={`/projects/todo/${todo.id}`} className='text-blue-500 hover:text-blue-700'>
              {todo.id}
            </NavLink>
          ))}
      </div>
      <div className='flex flex-col justify-center items-start w-full'>
        {location.pathname === "/projects/todo" ? <ToDoList list={list} /> : <Outlet />}
      </div>
    </div>
  );
};

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
    <div className='flex sm:flex-col md:flex-row h-full'>
      <div className='flex sm:flex-row md:flex-col sm:w-full md:h-full md:w-2/12 md:border-r border-stone-300 p-4'>
        <NewToDo />
        {list.length > 0 &&
          list.map((todo) => (
            <NavLink
              key={todo.id}
              to={`/projects/todo/${todo.id}`}
              className='p-2 my-2 hover:bg-amber-700 hover:text-stone-50 border border-amber-700 rounded-md'
            >
              {todo.title}
            </NavLink>
          ))}
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        {location.pathname === "/projects/todo" ? <ToDoList list={list} /> : <Outlet />}
      </div>
    </div>
  );
};

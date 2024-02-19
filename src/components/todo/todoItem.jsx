import { useLoaderData, Form } from "react-router-dom";

export const ToDoItem = () => {
  const { todo } = useLoaderData();

  console.log("ToDoItem", todo);

  return (
    <div>
      <h1>ToDoItem</h1>
      {todo && (
        <div>
          <h2>{todo.id}</h2>
          <Form action='edit'>
            <button className='bg-amber-700 px-4 py-2' type='submit' role='button'>
              Edit
            </button>
          </Form>
        </div>
      )}
    </div>
  );
};

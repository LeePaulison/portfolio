import { useLoaderData, Form } from "react-router-dom";

export const ToDoItem = () => {
  const { todo } = useLoaderData();

  console.log("ToDoItem", todo);

  return (
    <div className='card w-full'>
      {todo && (
        <>
          <div className='card-header'>{todo.title}</div>
          <div className='card-body'>
            <div dangerouslySetInnerHTML={{ __html: todo.description }} />
          </div>
          <div className='card-footer'>
            <div className='flex flex-row justify-end gap-4'>
              <Form action='edit'>
                <button className='bg-amber-700 px-4 py-2' type='submit' role='button'>
                  Edit
                </button>
              </Form>
              <Form method='post' action='destroy'>
                <button className='btn-submit' type='submit' role='button'>
                  Delete
                </button>
              </Form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

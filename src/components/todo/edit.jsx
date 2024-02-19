import { useLoaderData, Form, useNavigation } from "react-router-dom";

export const Edit = () => {
  const { todo } = useLoaderData();
  const { navigate } = useNavigation();

  return (
    <div className='bg-stone-100 border border-stone-300 rounded-md p-4 shadow-sm'>
      <h1>Edit Todo</h1>
      {todo && (
        <Form method='post' className='flex flex-col'>
          <h2>{todo.id}</h2>
          <label htmlFor='title'>Title</label>
          <input id='title' type='text' defaultValue={todo.title} name='title' className='bg-none' />
          <label htmlFor='description'>Description</label>
          <textarea id='description' defaultValue={todo.description} name='description' />
          <div className='flex gap-4 justify-end'>
            <button type='submit' className='btn-submit' role='button'>
              Save
            </button>
            <button role='button' onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        </Form>
      )}
    </div>
  );
};

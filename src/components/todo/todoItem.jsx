import { useLoaderData, Form, NavLink, useLocation } from "react-router-dom";
import propTypes from "prop-types";

export const ToDoItem = (props) => {
  let { todo } = useLoaderData();

  if (props.todo) {
    todo = props.todo;
  }

  const location = useLocation();

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
              {location.pathname === "/todolist" ? (
                <NavLink className='nav-link' to={`/todolist/${todo.id}`}>
                  View
                </NavLink>
              ) : (
                <>
                  <Form action='edit'>
                    <button className='btn' type='submit' role='button'>
                      Edit
                    </button>
                  </Form>
                  <NavLink className='nav-link' to='/todolist'>
                    Cancel
                  </NavLink>
                  <Form
                    method='post'
                    action='destroy'
                    onSubmit={(evt) => {
                      if (!confirm("Are you sure you want to delete this item?")) {
                        evt.preventDefault();
                      }
                    }}
                  >
                    <button className='btn-submit' type='submit' role='button'>
                      Delete
                    </button>
                  </Form>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

ToDoItem.propTypes = {
  todo: propTypes.object,
};

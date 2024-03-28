import PropTypes from "prop-types";
import { ToDoItem } from "./todoItem";

export const ToDoList = ({ list }) => {
  console.log("ToDoList", list);

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <h1>ToDoList</h1>
      {list.length > 0 ? list.map((todo) => <ToDoItem key={todo.id} todo={todo} />) : <p>No ToDos</p>}
    </div>
  );
};

ToDoList.propTypes = {
  list: PropTypes.array,
};

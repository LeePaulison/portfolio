import PropTypes from "prop-types";

export const ToDoList = ({ list }) => {
  console.log("ToDoList", list);

  return (
    <div>
      <h1>ToDoList</h1>
      {list.length > 0 &&
        list.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.id}</h2>
          </div>
        ))}
    </div>
  );
};

ToDoList.propTypes = {
  list: PropTypes.array,
};

import "./Todo.css";

function Todo({ title }) {
  function deleteTodo(id) {
    console.log("Hi", id.toUpperCase());
  }

  return (
    <div className="todo">
      <p>{title}</p>
      <button onClick={() => deleteTodo("bye")}>Delete</button>
    </div>
  );
}

export default Todo;

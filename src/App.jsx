import "./App.css";
import Title from "./components/Title";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

function App() {
  let isModalOpen = true

  return (
    <>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a $100k Job" />
      </div>
      {isModalOpen ? <Modal question="Are you sure?"/> : null}
    </>
  );
}

export default App;

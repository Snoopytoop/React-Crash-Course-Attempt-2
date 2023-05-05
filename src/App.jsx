import "./App.css";
import Title from "./components/Title";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Title />
      <div className="todo__wrapper">
        <Todo title={1} />
        <Todo title="Finish Interview Section"/>
        <Todo title="Land a $100k Job"/>
      </div>
      {/* <Modal /> */}
    </>
  );
}

export default App;

import "./App.css";
import Title from "./components/Title";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Title />
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified Step by Step"
        />
        <Todo
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 weeks"
        />
        <Todo title="Land a $100k Job" paragraph="Apply to 100 jobs" />
      </div>
      {/* <Modal question="Are you sure?"/> */}
    </>
  );
}

export default App;

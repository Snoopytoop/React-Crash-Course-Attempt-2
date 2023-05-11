import "./App.css";
import Title from "./components/Title";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false)
  

  return (
    <>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a $100k Job" />
      </div>
      {showModal && <Modal question="Are you sure?"/>}
    </>
  );
}

export default App;

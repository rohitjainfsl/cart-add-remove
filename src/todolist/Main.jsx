import { useState } from "react";

function Main() {
  const [inp, setInp] = useState("");
  const [tasks, setTasks] = useState([]);
  const [toEdit, setToEdit] = useState(false);
  const [addButtonTitle, setAddButtonTitle] = useState("Add Task");

  function handleClick() {
    if (toEdit === false) setTasks([...tasks, inp]);
    else {
      tasks[toEdit] = inp;
      setTasks(tasks);
      //reset the toEdit variable
      setToEdit(false);
      //reset the button title
      setAddButtonTitle("Add Task")
    }
    //clear the input field
    setInp("");
  }

  function handleEdit(e, index, valueToChange) {
    e.preventDefault();
    setInp(valueToChange);
    setToEdit(index);
    setAddButtonTitle("Edit a Task")
  }

  return (
    <>
      <h1>Todo List</h1>
      <div className="todo">
        <input
          type="text"
          placeholder="Enter a task"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button onClick={handleClick}>{addButtonTitle}</button>
      </div>

      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span>{task}</span>
              <div className="">
                <a href="">Delete</a>
                <a href="" onClick={(e) => handleEdit(e, index, task)}>
                  Edit
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Main;

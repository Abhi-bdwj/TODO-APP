import { useState } from "react";
import ListItem from "./ListItem";

const Todo = () => {
  const [input, setInput] = useState("");
  const [addTask, setAddTask] = useState([]);

  const InputHandler = (event) => setInput(event.target.value);

  const AddTaskHandler = (event) => {
    event.preventDefault();
    if (input.trim()) {
      setAddTask((prevTasks) => [...prevTasks, input]);
      setInput("");
    }
  };

  const HandleDelete = (taskToBeDeleted) => {
    setAddTask((prevTasks) =>
      prevTasks.filter((task) => task !== taskToBeDeleted)
    );
  };

  return (
    <div className="w-full max-w-md p-4 bg-gray-800 rounded-md shadow-lg">
      <form
        onSubmit={AddTaskHandler}
        className="flex items-center justify-between space-x-2 mb-4"
      >
        <label className="font-bold text-white">Task:</label>
        <textarea
          placeholder="Type your text here."
          value={input}
          className="flex-1 p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
          onChange={InputHandler}
          rows="1"
        />
        <button
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          type="submit"
        >
          ADD
        </button>
      </form>
      <ListItem tasks={addTask} onDelete={HandleDelete} />
    </div>
  );
};

export default Todo;

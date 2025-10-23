import { useState } from "react";

export default function FormToDo({ onAddTask }) {
  const [task, setTask] = useState(""); 

  
  const handleSubmit = (element) => {
    element.preventDefault(); 
    if (task.trim() === "") return;

    onAddTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={task}
        onChange={(element) => setTask(element.target.value)}
      />
      <button type="submit">Añadir tarea</button>
    </form>
  );
}

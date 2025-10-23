import "./App.css";
import { useState } from "react";
import Logo from "./components/Logo";
import FormToDo from "./components/FormToDo";
import ListToDo from "./components/ListToDo";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Al texto que le pasamos le pasamos un id único y también añadimos una variable para saber si hay que tachar
  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(), 
      text: text,
      completed: false,
    };
    // Copia las tareas anteriores y añade una nueva al final
    setTasks([...tasks, newTask]);
  };

  // elimina la tarea basado en el id que se le pasa, que será manejado con un botón
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // para tachar el texto, y saber si hay que quitarselo hacemos un mapeo, si el id coincide lo cambiamos sino no hacemos nada.
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Mis Tareas</h1>
      <Logo/>
      <FormToDo onAddTask={handleAddTask}/>
      <ListToDo
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggle={handleToggleComplete}
      />
    </div>
  );
}

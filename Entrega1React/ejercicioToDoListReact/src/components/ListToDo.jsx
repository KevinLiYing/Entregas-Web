import ToDo from "./ToDo";

// le pasamos los valores a la lista
export default function ListToDo({ tasks, onDelete, onToggle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <ToDo
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onToggle={() => onToggle(task.id)}
        />
      ))}
    </ul>
  );
}

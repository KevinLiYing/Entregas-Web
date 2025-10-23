export default function ToDo({ task, onDelete, onToggle }) {
  return (
    // Lo tachamos en css con el className, si tenemos su booleano en true, le añadimos completado, si no no le añadimos nada. En el css todo-item.completed tendra el subrayado
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <button onClick={onToggle}>Subrayar</button>
      <button onClick={onDelete}>x</button>
    </li>
  );
}

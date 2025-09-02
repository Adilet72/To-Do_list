import { useState } from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const isOverdue =
    todo.deadline && new Date(todo.deadline) < new Date() && !todo.completed;

  const handleEdit = () => {
    if (isEditing && newText.trim()) editTodo(todo.id, newText);
    setIsEditing(!isEditing);
  };

  const priorityColors = {
    Высокий: "red",
    Средний: "orange",
    Низкий: "green",
  };

  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""} ${
        isOverdue ? "overdue" : ""
      }`}
      style={{ borderLeft: `5px solid ${priorityColors[todo.priority]}` }}
    >
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          autoFocus
        />
      ) : (
        <>
          <div className="todo-text" onClick={() => toggleTodo(todo.id)}>
            <span>{todo.text}</span>
            <small className="category">📌 {todo.category}</small>
            {todo.deadline && (
              <small className="deadline">⏰ {todo.deadline}</small>
            )}
            <small className="priority">⚡ {todo.priority}</small>
          </div>
          <div className="actions">
            <button onClick={handleEdit}>✏️</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;

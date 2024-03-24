import React,{useState} from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== "") {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={e => setEditText(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;

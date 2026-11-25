export default function TodoItem({
  id,
  label,
  isCompleted,
  toggleIsCompleted,
  deleteTodo,
}) {
  const handleCheckboxClicked = () => {
    toggleIsCompleted(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button
          className={`btn btn-sm btn-${isCompleted ? "success" : "light"}`}
          onClick={handleCheckboxClicked}
        >
          <i className={`bi bi-${isCompleted ? "check-square" : "square"}`}></i>
        </button>
        <span
          className={`ms-2 ${isCompleted ? "text-decoration-line-through" : ""}`}
        >
          {label}
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

const Task = ({ id, task, isDone, toggleTaskButton }) => {
  const handleCheckboxClick = (e) => {
    toggleTaskButton(id);
  };

  return (
    <div className="d-flex align-items-center my-2">
      <input
        type="checkbox"
        className="me-3"
        checked={isDone}
        onChange={handleCheckboxClick}
        readOnly
      />
      <span className={isDone ? "text-decoration-line-through" : ""}>
        {task}
      </span>
    </div>
  );
};

export default Task;

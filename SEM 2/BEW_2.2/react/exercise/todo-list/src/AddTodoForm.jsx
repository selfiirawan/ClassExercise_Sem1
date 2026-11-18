import { useState } from "react";

// step 4
export default function AddTodoForm({ addNewTodo }) {
  const [newTodo, setNewTodo] = useState("");

  // step 2
  const handleAddButtonClick = (e) => {
    e.preventDefault();
    const newTodoObject = {
      label: newTodo,
      isCompleted: false,
    };
    // step 3
    addNewTodo(newTodoObject);
  };

  return (
    <div className="mt-4">
      <form classNameName="d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Add new item..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          required
        />
        <button
          className="btn btn-primary btn-sm rounded ms-2"
          onClick={handleAddButtonClick} // step 1
        >
          Add
        </button>
      </form>
    </div>
  );
}

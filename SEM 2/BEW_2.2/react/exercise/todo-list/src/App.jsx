import "./Todo.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const todoItems = [
    {
      label: "Task 1",
      isCompleted: true,
    },
    {
      label: "Task 2",
      isCompleted: false,
    },
    {
      label: "Task 3",
      isCompleted: false,
    },
  ];

  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>

        <TodoList todoItems={todoItems} />
        <AddTodoForm />
      </div>
    </div>
  );
}

export default App;

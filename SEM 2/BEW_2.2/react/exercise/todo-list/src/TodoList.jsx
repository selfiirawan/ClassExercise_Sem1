import TodoItem from "./TodoItem";

export default function TodoList({ todoItems, toggleIsCompleted, deleteTodo }) {
  return (
    <ul className="list-group">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          {...item}
          toggleIsCompleted={toggleIsCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

import TodoItem from "./TodoItem";

export default function TodoList({ todoItems }) {
  return (
    <ul className="list-group">
      {todoItems.map((item, index) => (
        <TodoItem key={index} {...item} />
      ))}
    </ul>
  );
}

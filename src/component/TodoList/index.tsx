import Add from "./Add";
import Todo from "./Todo";

function TodoList({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

TodoList.Todo = Todo;
TodoList.Add = Add;

export default TodoList;

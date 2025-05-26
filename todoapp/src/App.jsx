import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { getList, putTodo, removeTodo } from "./common/todoApi";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getList().then((data) => {
      console.log(data);
      setTodos(data);
      setLoading(false);
    });
  }, []);

  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        title: text,
        completed: false,
      };
      setTodos(todos.concat(newTodo));
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      removeTodo(id).then((data) => {
        console.log("삭제 {}", data);
      });
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );

  const onToggle = useCallback((id) => {
    const oriTodo = todos((todo) => todo.id == id);
    const updateTodo = { ...oriTodo, completed: !oriTodo.completed };
    putTodo(updateTodo).then(
      (data) => {
        console.log(data);
        setTodos(
          todos.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  completed: !todo.completed,
                }
              : todo
          )
        );
      },
      [todos]
    );
  });

  if (loading) {
    return <div className="text-4xl font-extrabold text-orange-400">Loading...</div>;
  }

  if (!todos) {
    return null;
  }

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App;

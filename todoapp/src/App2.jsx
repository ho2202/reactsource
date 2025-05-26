import { useCallback, useRef, useState } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

// 임의 데이터로 테스트
function App2() {
  const todoList = [
    {
      id: 1,
      title: "react 기초 알아보기",
      complete: true,
    },
    {
      id: 2,
      title: "java 기초 알아보기",
      complete: true,
    },
    {
      id: 3,
      title: "일정관리 앱 작성",
      complete: false,
    },
    {
      id: 4,
      title: "서버 연동하기",
      complete: false,
    },
  ];

  const [todos, setTodos] = useState(todoList);
  // 재렌더링시 값 기억
  const nextId = useRef(5);

  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        title: text,
        completed: false,
      };
      setTodos(todos.concat(newTodo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
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
  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App2;

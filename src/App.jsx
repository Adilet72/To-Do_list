import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("light");
  const [categoryFilter, setCategoryFilter] = useState("Все");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const addTodo = (text, category, deadline, priority) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        category,
        deadline,
        priority,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const reorderTodos = (newTodos) => setTodos(newTodos);

  return (
    <div className="app">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Header addTodo={addTodo} />
      <TodoList
        todos={todos}
        filter={filter}
        categoryFilter={categoryFilter}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        reorderTodos={reorderTodos}
      />
      <Footer
        todos={todos}
        setFilter={setFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
    </div>
  );
};

export default App;

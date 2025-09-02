import { useState } from "react";

const Header = ({ addTodo }) => {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("Личное");
    const [deadline, setDeadline] = useState("");
    const [priority, setPriority] = useState("Средний");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text, category, deadline, priority);
        setText("");
        setDeadline("");
        setCategory("Личное");
        setPriority("Средний");
    };

    return (
        <header className="header">
            <h1>✅ Мой To-Do List</h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    placeholder="Новая задача..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="input-task"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="select-category"
                >
                    <option>Работа</option>
                    <option>Учёба</option>
                    <option>Личное</option>
                </select>
                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="input-date"
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="select-priority"
                >
                    <option>Высокий</option>
                    <option>Средний</option>
                    <option>Низкий</option>
                </select>
                <button type="submit" className="btn-add">
                    Добавить
                </button>
            </form>
        </header>
    );
};

export default Header;

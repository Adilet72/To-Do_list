const Footer = ({ todos, setFilter, categoryFilter, setCategoryFilter }) => {
    const active = todos.filter((t) => !t.completed).length;
    const completed = todos.filter((t) => t.completed).length;

    const categories = ["Все", "Работа", "Учёба", "Личное"];

    return (
        <footer className="footer">
            <span>Активные: {active} | Выполненные: {completed}</span>
            <div className="filters">
                <button onClick={() => setFilter("all")} className="btn-filter">
                    Все
                </button>
                <button onClick={() => setFilter("active")} className="btn-filter">
                    Активные
                </button>
                <button onClick={() => setFilter("completed")} className="btn-filter">
                    Выполненные
                </button>
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="select-filter-category"
                >
                    <option>Все</option>
                    <option>Работа</option>
                    <option>Учёба</option>
                    <option>Личное</option>
                </select>
            </div>

        </footer>
    );
};

export default Footer;

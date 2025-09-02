import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({
    todos,
    filter,
    categoryFilter,
    toggleTodo,
    deleteTodo,
    editTodo,
    reorderTodos,
}) => {
    const filtered = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    }).filter((todo) => categoryFilter === "Все" || todo.category === categoryFilter);

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(filtered);
        const [reordered] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reordered);
        reorderTodos(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
                {(provided) => (
                    <ul className="todo-list" {...provided.droppableProps} ref={provided.innerRef}>
                        {filtered.map((todo, index) => (
                            <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <TodoItem
                                            todo={todo}
                                            toggleTodo={toggleTodo}
                                            deleteTodo={deleteTodo}
                                            editTodo={editTodo}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TodoList;

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
        </li>
    )
}
export default TodoItem;
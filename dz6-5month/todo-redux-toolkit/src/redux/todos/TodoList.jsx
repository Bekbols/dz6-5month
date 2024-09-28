import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';

const TodoList = () => {
    const [input, setInput] = useState('');
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Добавьте что-нибудь"
            />
            <button onClick={handleAddTodo}>Добавить</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

import { useState } from 'react';

/**
 * COMPLETE EXAMPLE: Todo Application
 * 
 * This combines multiple React concepts:
 * - useState for state management
 * - Event handling
 * - Lists and keys
 * - Conditional rendering
 * - Form inputs
 */

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React basics', completed: false },
        { id: 2, text: 'Build a project', completed: false },
        { id: 3, text: 'Master React hooks', completed: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all'); // all, active, completed

    // Add new todo
    const addTodo = () => {
        if (inputValue.trim()) {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };

    // Toggle todo completion
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Delete todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Clear completed todos
    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    // Filter todos
    const getFilteredTodos = () => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    };

    const filteredTodos = getFilteredTodos();
    const activeCount = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.filter(todo => todo.completed).length;

    return (
        <div className="lesson-card todo-app">
            <h2>✅ Todo Application</h2>
            <p className="subtitle">A complete example combining multiple React concepts</p>

            {/* Input Section */}
            <div className="todo-input-section">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="What needs to be done?"
                    className="todo-input"
                />
                <button onClick={addTodo} className="btn-primary">
                    Add Todo
                </button>
            </div>

            {/* Stats */}
            <div className="todo-stats">
                <span className="stat">📝 Total: {todos.length}</span>
                <span className="stat">⏳ Active: {activeCount}</span>
                <span className="stat">✅ Completed: {completedCount}</span>
            </div>

            {/* Filter Buttons */}
            <div className="filter-buttons">
                <button
                    onClick={() => setFilter('all')}
                    className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter('active')}
                    className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
                >
                    Active
                </button>
                <button
                    onClick={() => setFilter('completed')}
                    className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
                >
                    Completed
                </button>
            </div>

            {/* Todo List */}
            <ul className="todo-list">
                {filteredTodos.length === 0 ? (
                    <li className="empty-state">
                        {filter === 'all' ? '🎉 No todos yet!' : `No ${filter} todos`}
                    </li>
                ) : (
                    filteredTodos.map(todo => (
                        <li key={todo.id} className="todo-item">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className="todo-checkbox"
                            />
                            <span
                                className={todo.completed ? 'todo-text completed' : 'todo-text'}
                                onClick={() => toggleTodo(todo.id)}
                            >
                                {todo.text}
                            </span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="delete-btn"
                            >
                                🗑️
                            </button>
                        </li>
                    ))
                )}
            </ul>

            {/* Actions */}
            {completedCount > 0 && (
                <button onClick={clearCompleted} className="btn-danger">
                    Clear Completed ({completedCount})
                </button>
            )}

            <div className="code-explanation">
                <h4>💡 Concepts Used in This App</h4>
                <ul>
                    <li>✅ <strong>useState</strong> - Managing todos, input, and filter</li>
                    <li>✅ <strong>Event Handling</strong> - Click, change, keypress events</li>
                    <li>✅ <strong>Lists & Keys</strong> - Rendering todos with unique keys</li>
                    <li>✅ <strong>Conditional Rendering</strong> - Empty state, clear button</li>
                    <li>✅ <strong>Array Methods</strong> - map, filter, spread operator</li>
                    <li>✅ <strong>Controlled Inputs</strong> - Input value tied to state</li>
                </ul>
            </div>
        </div>
    );
}

export default TodoApp;

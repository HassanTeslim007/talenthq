import { useState } from 'react';

/**
 * LESSON 4: Lists and Keys
 * 
 * This component demonstrates:
 * - Rendering lists with map()
 * - Importance of keys
 * - Working with arrays of objects
 */

function ListsAndKeys() {
    const [fruits, setFruits] = useState([
        { id: 1, name: '🍎 Apple', color: 'red' },
        { id: 2, name: '🍌 Banana', color: 'yellow' },
        { id: 3, name: '🍊 Orange', color: 'orange' },
        { id: 4, name: '🍇 Grapes', color: 'purple' }
    ]);

    const [newFruit, setNewFruit] = useState('');

    const addFruit = () => {
        if (newFruit.trim()) {
            const newId = Math.max(...fruits.map(f => f.id), 0) + 1;
            setFruits([...fruits, { id: newId, name: newFruit, color: 'green' }]);
            setNewFruit('');
        }
    };

    const removeFruit = (id) => {
        setFruits(fruits.filter(fruit => fruit.id !== id));
    };

    return (
        <div className="lesson-card">
            <h2>📋 Lists and Keys</h2>

            {/* Simple list rendering */}
            <div className="example-section">
                <h4>Fruit List</h4>
                <ul className="fruit-list">
                    {fruits.map(fruit => (
                        <li key={fruit.id} className="fruit-item">
                            <span>{fruit.name}</span>
                            <span className="fruit-color" style={{ color: fruit.color }}>
                                ({fruit.color})
                            </span>
                            <button
                                onClick={() => removeFruit(fruit.id)}
                                className="btn-danger-small"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Add new fruit */}
            <div className="input-group">
                <input
                    type="text"
                    value={newFruit}
                    onChange={(e) => setNewFruit(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addFruit()}
                    placeholder="Add a fruit..."
                    className="input-field"
                />
                <button onClick={addFruit} className="btn-primary">
                    Add Fruit
                </button>
            </div>

            <div className="code-explanation">
                <h4>💡 Lists & Keys Explained</h4>
                <ul>
                    <li><strong>map():</strong> Transforms array into JSX elements</li>
                    <li><strong>key prop:</strong> Must be unique for each item</li>
                    <li><strong>Why keys?</strong> Helps React identify which items changed</li>
                    <li><strong>Best practice:</strong> Use unique IDs, not array index</li>
                </ul>
                <pre className="code-block">
                    {`{fruits.map(fruit => (
  <li key={fruit.id}>{fruit.name}</li>
))}`}
                </pre>
            </div>
        </div>
    );
}

export default ListsAndKeys;

import { useState } from 'react';

/**
 * LESSON 5: useState Hook
 * 
 * This component demonstrates:
 * - How to use useState
 * - Updating state
 * - Multiple state variables
 * - State with different data types
 */

function UseStateExample() {
    // State for counter (number)
    const [count, setCount] = useState(0);

    // State for text input (string)
    const [name, setName] = useState('');

    // State for toggle (boolean)
    const [isVisible, setIsVisible] = useState(true);

    // State for object
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    });

    // Update object state (must spread existing properties)
    const updateAge = () => {
        setUser({ ...user, age: user.age + 1 });
    };

    return (
        <div className="lesson-card">
            <h2>🎣 useState Hook</h2>

            {/* Example 1: Counter */}
            <div className="example-section">
                <h4>1. Number State (Counter)</h4>
                <p className="count-display">Count: {count}</p>
                <div className="button-group">
                    <button onClick={() => setCount(count + 1)} className="btn-primary">
                        Increment
                    </button>
                    <button onClick={() => setCount(count - 1)} className="btn-secondary">
                        Decrement
                    </button>
                    <button onClick={() => setCount(0)} className="btn-danger">
                        Reset
                    </button>
                </div>
            </div>

            {/* Example 2: Text Input */}
            <div className="example-section">
                <h4>2. String State (Input)</h4>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                    className="input-field"
                />
                <p>Hello, <strong>{name || 'stranger'}</strong>! 👋</p>
            </div>

            {/* Example 3: Boolean Toggle */}
            <div className="example-section">
                <h4>3. Boolean State (Toggle)</h4>
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="btn-primary"
                >
                    {isVisible ? 'Hide' : 'Show'} Message
                </button>
                {isVisible && <p className="message">🎉 This message is visible!</p>}
            </div>

            {/* Example 4: Object State */}
            <div className="example-section">
                <h4>4. Object State</h4>
                <p>Name: {user.firstName} {user.lastName}</p>
                <p>Age: {user.age}</p>
                <button onClick={updateAge} className="btn-primary">
                    Increase Age
                </button>
            </div>

            <div className="code-explanation">
                <h4>💡 useState Explained</h4>
                <pre className="code-block">
                    {`const [state, setState] = useState(initialValue);

// state: current value
// setState: function to update state
// initialValue: starting value`}
                </pre>
                <ul>
                    <li><strong>Never</strong> modify state directly: <code>count = 5</code> ❌</li>
                    <li><strong>Always</strong> use setState: <code>setCount(5)</code> ✅</li>
                    <li>For objects/arrays, spread existing values: <code>{'{...user, age: 26}'}</code></li>
                </ul>
            </div>
        </div>
    );
}

export default UseStateExample;

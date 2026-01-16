/**
 * LESSON 2: Event Handling in React
 * 
 * This component demonstrates:
 * - onClick events
 * - Event handler functions
 * - Inline vs separate event handlers
 */

function EventHandling() {
    // Separate event handler function
    const handleClick = () => {
        alert('Button clicked! 🎉');
    };

    const handleGreet = (name) => {
        alert(`Hello, ${name}! 👋`);
    };

    return (
        <div className="lesson-card">
            <h2>🖱️ Event Handling</h2>

            <div className="button-group">
                {/* Method 1: Reference to function */}
                <button onClick={handleClick} className="btn-primary">
                    Click Me (Separate Handler)
                </button>

                {/* Method 2: Inline arrow function */}
                <button onClick={() => alert('Inline handler! ⚡')} className="btn-secondary">
                    Click Me (Inline)
                </button>

                {/* Method 3: Passing arguments */}
                <button onClick={() => handleGreet('React Learner')} className="btn-success">
                    Greet Me
                </button>
            </div>

            <div className="code-explanation">
                <h4>💡 Event Handling Tips</h4>
                <ul>
                    <li>Use <code>onClick</code> (camelCase), not <code>onclick</code></li>
                    <li>Pass function reference: <code>onClick={'{handleClick}'}</code></li>
                    <li>For arguments, use arrow function: <code>onClick={'{() => handleGreet("name")}'}</code></li>
                    <li>Don't call the function: <code>onClick={'{handleClick()}'}</code> ❌</li>
                </ul>
            </div>
        </div>
    );
}

export default EventHandling;

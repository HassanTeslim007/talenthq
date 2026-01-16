import { useState } from 'react';

/**
 * LESSON 3: Conditional Rendering
 * 
 * This component demonstrates:
 * - Rendering based on conditions
 * - Ternary operators
 * - && operator for conditional display
 * - if/else statements
 */

function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [messageCount, setMessageCount] = useState(3);

    return (
        <div className="lesson-card">
            <h2>🔀 Conditional Rendering</h2>

            {/* Method 1: Ternary operator */}
            <div className="example-section">
                <h4>Method 1: Ternary Operator</h4>
                <p>
                    {isLoggedIn ? (
                        <span className="status-success">✅ Welcome back!</span>
                    ) : (
                        <span className="status-warning">⚠️ Please sign in</span>
                    )}
                </p>
            </div>

            {/* Method 2: && operator (only show if true) */}
            <div className="example-section">
                <h4>Method 2: && Operator</h4>
                {messageCount > 0 && (
                    <p className="notification">
                        📬 You have {messageCount} new messages!
                    </p>
                )}
                {messageCount === 0 && (
                    <p className="info">📭 No new messages</p>
                )}
            </div>

            {/* Controls */}
            <div className="button-group">
                <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className="btn-primary"
                >
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>

                <button
                    onClick={() => setMessageCount(messageCount + 1)}
                    className="btn-secondary"
                >
                    Add Message
                </button>

                <button
                    onClick={() => setMessageCount(Math.max(0, messageCount - 1))}
                    className="btn-secondary"
                >
                    Remove Message
                </button>
            </div>

            <div className="code-explanation">
                <h4>💡 Conditional Rendering Patterns</h4>
                <ul>
                    <li><strong>Ternary:</strong> <code>{'{condition ? <A /> : <B />}'}</code></li>
                    <li><strong>&&:</strong> <code>{'{condition && <Component />}'}</code></li>
                    <li><strong>if/else:</strong> Use before return statement</li>
                </ul>
            </div>
        </div>
    );
}

export default ConditionalRendering;

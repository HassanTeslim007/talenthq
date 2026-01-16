import { useState, useEffect } from 'react';

/**
 * LESSON 6: useEffect Hook
 * 
 * This component demonstrates:
 * - useEffect basics
 * - Dependency array
 * - Cleanup functions
 * - Different useEffect patterns
 */

function UseEffectExample() {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // Effect 1: Runs after EVERY render
    useEffect(() => {
        console.log('Component rendered!');
    });

    // Effect 2: Runs ONCE on mount (empty dependency array)
    useEffect(() => {
        console.log('Component mounted! 🎉');
        document.title = 'React Learning - useEffect';

        // Cleanup function (runs on unmount)
        return () => {
            console.log('Component will unmount! 👋');
            document.title = 'React Learning';
        };
    }, []);

    // Effect 3: Runs when 'count' changes
    useEffect(() => {
        console.log(`Count changed to: ${count}`);
    }, [count]);

    // Effect 4: Timer with cleanup
    useEffect(() => {
        let interval;

        if (isTimerRunning) {
            interval = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000);
        }

        // Cleanup: clear interval when effect re-runs or component unmounts
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isTimerRunning]);

    const toggleTimer = () => {
        setIsTimerRunning(!isTimerRunning);
    };

    const resetTimer = () => {
        setSeconds(0);
        setIsTimerRunning(false);
    };

    return (
        <div className="lesson-card">
            <h2>🎣 useEffect Hook</h2>

            {/* Example 1: Counter with effect */}
            <div className="example-section">
                <h4>1. Effect on State Change</h4>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)} className="btn-primary">
                    Increment
                </button>
                <p className="info-text">
                    💡 Check console - effect runs when count changes!
                </p>
            </div>

            {/* Example 2: Timer */}
            <div className="example-section">
                <h4>2. Timer with Cleanup</h4>
                <p className="timer-display">⏱️ {seconds} seconds</p>
                <div className="button-group">
                    <button onClick={toggleTimer} className="btn-primary">
                        {isTimerRunning ? 'Pause' : 'Start'}
                    </button>
                    <button onClick={resetTimer} className="btn-secondary">
                        Reset
                    </button>
                </div>
            </div>

            <div className="code-explanation">
                <h4>💡 useEffect Patterns</h4>

                <div className="pattern-section">
                    <h5>1. Run on Every Render</h5>
                    <pre className="code-block">
                        {`useEffect(() => {
  // Runs after every render
});`}
                    </pre>
                </div>

                <div className="pattern-section">
                    <h5>2. Run Once on Mount</h5>
                    <pre className="code-block">
                        {`useEffect(() => {
  // Runs once when component mounts
}, []); // Empty dependency array`}
                    </pre>
                </div>

                <div className="pattern-section">
                    <h5>3. Run When Dependencies Change</h5>
                    <pre className="code-block">
                        {`useEffect(() => {
  // Runs when count changes
}, [count]); // Dependency array`}
                    </pre>
                </div>

                <div className="pattern-section">
                    <h5>4. Cleanup Function</h5>
                    <pre className="code-block">
                        {`useEffect(() => {
  const timer = setInterval(() => {...}, 1000);
  
  return () => {
    clearInterval(timer); // Cleanup
  };
}, []);`}
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default UseEffectExample;

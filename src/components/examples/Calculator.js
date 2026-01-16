import { useState } from 'react';

/**
 * COMPLETE EXAMPLE: Simple Calculator
 * 
 * This demonstrates:
 * - State management
 * - Event handling
 * - Conditional rendering
 * - Working with numbers
 */

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const inputDigit = (digit) => {
        if (waitingForOperand) {
            setDisplay(String(digit));
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? String(digit) : display + digit);
        }
    };

    const inputDecimal = () => {
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
            setDisplay(display + '.');
        }
    };

    const clear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const performOperation = (nextOperation) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            const newValue = calculate(currentValue, inputValue, operation);

            setDisplay(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForOperand(true);
        setOperation(nextOperation);
    };

    const calculate = (firstValue, secondValue, operation) => {
        switch (operation) {
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
            case '×':
                return firstValue * secondValue;
            case '÷':
                return firstValue / secondValue;
            case '=':
                return secondValue;
            default:
                return secondValue;
        }
    };

    return (
        <div className="lesson-card calculator">
            <h2>🧮 Calculator</h2>
            <p className="subtitle">Interactive example with state management</p>

            <div className="calculator-container">
                <div className="calculator-display">{display}</div>

                <div className="calculator-keypad">
                    <button onClick={clear} className="calc-btn function">AC</button>
                    <button onClick={() => setDisplay(String(-parseFloat(display)))} className="calc-btn function">±</button>
                    <button onClick={() => setDisplay(String(parseFloat(display) / 100))} className="calc-btn function">%</button>
                    <button onClick={() => performOperation('÷')} className="calc-btn operator">÷</button>

                    <button onClick={() => inputDigit(7)} className="calc-btn">7</button>
                    <button onClick={() => inputDigit(8)} className="calc-btn">8</button>
                    <button onClick={() => inputDigit(9)} className="calc-btn">9</button>
                    <button onClick={() => performOperation('×')} className="calc-btn operator">×</button>

                    <button onClick={() => inputDigit(4)} className="calc-btn">4</button>
                    <button onClick={() => inputDigit(5)} className="calc-btn">5</button>
                    <button onClick={() => inputDigit(6)} className="calc-btn">6</button>
                    <button onClick={() => performOperation('-')} className="calc-btn operator">−</button>

                    <button onClick={() => inputDigit(1)} className="calc-btn">1</button>
                    <button onClick={() => inputDigit(2)} className="calc-btn">2</button>
                    <button onClick={() => inputDigit(3)} className="calc-btn">3</button>
                    <button onClick={() => performOperation('+')} className="calc-btn operator">+</button>

                    <button onClick={() => inputDigit(0)} className="calc-btn zero">0</button>
                    <button onClick={inputDecimal} className="calc-btn">.</button>
                    <button onClick={() => performOperation('=')} className="calc-btn operator">=</button>
                </div>
            </div>

            <div className="code-explanation">
                <h4>💡 Calculator Features</h4>
                <ul>
                    <li>Multiple state variables working together</li>
                    <li>Complex event handling logic</li>
                    <li>State updates based on previous state</li>
                    <li>Conditional rendering based on state</li>
                </ul>
            </div>
        </div>
    );
}

export default Calculator;

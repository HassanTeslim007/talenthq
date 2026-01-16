/**
 * LESSON 1: Basic Function Component with Props
 * 
 * This component demonstrates:
 * - How to create a function component
 * - How to receive and use props
 * - JSX syntax basics
 */

function Welcome(props) {
  return (
    <div className="lesson-card">
      <h2>👋 Welcome Component</h2>
      <p>Hello, <strong>{props.name}</strong>!</p>
      <p>You are <strong>{props.age}</strong> years old.</p>
      
      <div className="code-explanation">
        <h4>💡 What's happening here?</h4>
        <ul>
          <li><code>props</code> - Data passed from parent component</li>
          <li><code>{'{props.name}'}</code> - Accessing prop values with curly braces</li>
          <li>This component is <strong>reusable</strong> with different props</li>
        </ul>
      </div>
    </div>
  );
}

// Alternative: Destructuring props (cleaner syntax)
export function WelcomeDestructured({ name, age }) {
  return (
    <div className="lesson-card">
      <h2>👋 Welcome (Destructured)</h2>
      <p>Hello, <strong>{name}</strong>!</p>
      <p>You are <strong>{age}</strong> years old.</p>
      
      <div className="code-explanation">
        <h4>💡 Destructuring Props</h4>
        <p>Instead of <code>props.name</code>, we destructure: <code>{'{name, age}'}</code></p>
        <p>This makes the code cleaner and easier to read!</p>
      </div>
    </div>
  );
}

export default Welcome;

import { useState } from 'react';
import './App.css';

// Basic Components
import Welcome, { WelcomeDestructured } from './components/basics/Welcome';
import EventHandling from './components/basics/EventHandling';
import ConditionalRendering from './components/basics/ConditionalRendering';
import ListsAndKeys from './components/basics/ListsAndKeys';

// Hooks Examples
import UseStateExample from './components/hooks/UseStateExample';
import UseEffectExample from './components/hooks/UseEffectExample';

// Complete Examples
import TodoApp from './components/examples/TodoApp';
import Calculator from './components/examples/Calculator';

function App() {
  const [activeSection, setActiveSection] = useState('basics');

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <h1>⚛️ React Learning Hub</h1>
        <p className="tagline">Learn React fundamentals with interactive examples</p>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <button
          onClick={() => setActiveSection('basics')}
          className={activeSection === 'basics' ? 'nav-btn active' : 'nav-btn'}
        >
          📚 Basics
        </button>
        <button
          onClick={() => setActiveSection('hooks')}
          className={activeSection === 'hooks' ? 'nav-btn active' : 'nav-btn'}
        >
          🎣 Hooks
        </button>
        <button
          onClick={() => setActiveSection('examples')}
          className={activeSection === 'examples' ? 'nav-btn active' : 'nav-btn'}
        >
          🚀 Complete Examples
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* BASICS SECTION */}
        {activeSection === 'basics' && (
          <div className="section">
            <h2 className="section-title">📚 React Basics</h2>

            <Welcome name="React Learner" age={25} />
            <WelcomeDestructured name="JavaScript Developer" age={30} />
            <EventHandling />
            <ConditionalRendering />
            <ListsAndKeys />
          </div>
        )}

        {/* HOOKS SECTION */}
        {activeSection === 'hooks' && (
          <div className="section">
            <h2 className="section-title">🎣 React Hooks</h2>

            <UseStateExample />
            <UseEffectExample />

            <div className="lesson-card info-card">
              <h3>🎓 What's Next?</h3>
              <p>After mastering useState and useEffect, explore:</p>
              <ul>
                <li><strong>useContext</strong> - Share data without prop drilling</li>
                <li><strong>useReducer</strong> - Complex state management</li>
                <li><strong>useMemo</strong> - Performance optimization</li>
                <li><strong>useCallback</strong> - Memoize functions</li>
                <li><strong>useRef</strong> - Access DOM elements</li>
                <li><strong>Custom Hooks</strong> - Reusable logic</li>
              </ul>
            </div>
          </div>
        )}

        {/* COMPLETE EXAMPLES SECTION */}
        {activeSection === 'examples' && (
          <div className="section">
            <h2 className="section-title">🚀 Complete Examples</h2>

            <TodoApp />
            <Calculator />

            <div className="lesson-card info-card">
              <h3>🎉 Congratulations!</h3>
              <p>You've learned the fundamentals of React! Here's what you can do now:</p>
              <ul>
                <li>✅ Create functional components</li>
                <li>✅ Use props to pass data</li>
                <li>✅ Manage state with useState</li>
                <li>✅ Handle side effects with useEffect</li>
                <li>✅ Handle events</li>
                <li>✅ Render lists and use keys</li>
                <li>✅ Implement conditional rendering</li>
              </ul>
              <h4>Next Steps:</h4>
              <ul>
                <li>🔨 Build your own project</li>
                <li>📖 Learn React Router for navigation</li>
                <li>🌐 Fetch data from APIs</li>
                <li>🎨 Explore component libraries (Material-UI, Chakra UI)</li>
                <li>⚡ Learn state management (Context API, Redux)</li>
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>💡 Tip: Open the browser console to see useEffect logs!</p>
        <p>Made with ❤️ for learning React</p>
      </footer>
    </div>
  );
}

export default App;

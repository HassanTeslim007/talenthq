import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import TalentHQPage from './pages/TalentHQPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* TalentHQ - Main Application */}
          <Route path="/" element={<TalentHQPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}


export default App;

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import TalentHQPage from './pages/TalentHQPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* TalentHQ - Main Application */}
        <Route path="/" element={<TalentHQPage />} />
      </Routes>
    </Router>
  );
}

export default App;

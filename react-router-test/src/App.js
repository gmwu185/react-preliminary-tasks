import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import FQA from './components/FQA';
import About from './components/About';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FQA />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

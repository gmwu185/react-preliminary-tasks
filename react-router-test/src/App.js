import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link> | <Link to="/faq">FQA</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/faq">FQA</Link>
      </nav>
    </>
  );
}

function FQA() {
  return (
    <>
      <main>
        <h2>FQA</h2>
        <p>
          This FQA Page text...
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </>
  )
}

function NotFound() {
  return (
    <>
      <main>
        <h2>輸入網址錯誤</h2>
        <p>
          請查明或回首頁重新操作
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}

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

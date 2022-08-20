import { Link } from 'react-router-dom';

function FQA() {
  return (
    <>
      <main>
        <h2>FQA</h2>
        <p>This FQA Page text...</p>
      </main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default FQA;

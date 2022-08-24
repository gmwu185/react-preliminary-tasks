import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default Home;

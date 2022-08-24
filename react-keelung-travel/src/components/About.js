import { Link, useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <h2>About</h2>
      </main>
      <nav>
        <input type="button" value="useNavigate goto Home"
          onClick={()=> navigate('/')}
        /> | <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;

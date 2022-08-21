import { Link, useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <input type="button" value="useNavigate goto Home"
          onClick={()=> navigate('/')}
        /> | <Link to="/">Home</Link> | <Link to="/faq">FQA</Link>
      </nav>
    </>
  );
}

export default About;

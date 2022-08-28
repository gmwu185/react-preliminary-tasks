import { Link } from 'react-router-dom';

const LayoutNavber = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand font-italic" to="/">
          KeelungTravel<span>基隆旅遊網</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                首頁
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                關於基隆
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tour">
                旅遊基隆
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavber;

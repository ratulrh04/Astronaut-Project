
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


const Nav = () => {
  return (
    <div>
      <BrowserRouter>
      <nav id="navbar" className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="../../public/image/purple-planate-removebg-preview.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto bg-none">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <div className="icon-wrapper">
                    <CiFacebook className="facebook nav-icon" />
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <div className="icon-wrapper">
                    <CiLinkedin className="linkdin nav-icon" />
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <div className="icon-wrapper">
                    <FaInstagram className="instagram nav-icon" />
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-text" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-text" to="/#project">
                 Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-text" to="/#skill">
                  Skill
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      </BrowserRouter>
    </div>
  );
};

export default Nav;
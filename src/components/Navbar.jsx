import "../styles/Navbar.css"
import { FaHome, FaInstagram, FaWhatsapp, FaPaperPlane } from "react-icons/fa"

function Navbar() {
  return (
    <div className="Container">
      <nav className="navbar">
        <div className="navbar-home">
          <a href="/" onClick={() => window.location.reload()}>
            <FaHome />
          </a>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <a
            href="https://www.instagram.com/kevintriwaldi/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-social"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/6285766329088"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-social"
          >
            <FaWhatsapp />
          </a>
          <a href="mailto:kevintriwaldi@gmail.com" className="hire-me-btn">
            Hire Me{" "}
            <span className="hire-me-icon">
              <FaPaperPlane />
            </span>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

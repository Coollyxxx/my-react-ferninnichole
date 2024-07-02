import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import logo from '../assets/images/1703042281262.jpg'; // Import the image

const Layout = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet />
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Fernin, Nichole. All rights reserved.</p>
          <p>For inquiries, email me at: example@email.com</p>
          <p>
            Follow me on social media: 
            <a href="https://web.facebook.com/Clairenichole27">Facebook</a> |  
            <a href="#instagram">Instagram</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;




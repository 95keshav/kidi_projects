import { links, social } from "./data";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social">
        <ul>
          {social.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url} target="_blank">
                  {link.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

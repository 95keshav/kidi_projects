import { links } from "./data";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useState } from "react";

const MobileNav = () => {
  const [showLinks, setShowLinks] = useState(false);
  console.log("lll");
  return (
    <nav className="mobileNav">
      <div className="mobileHeader">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="menu" style={showLinks ? { top: "56px" } : { display: "-200px" }}>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id} onClick={() => setShowLinks(!showLinks)}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default MobileNav;

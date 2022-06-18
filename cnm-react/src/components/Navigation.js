import React from "react";
import { NavLink } from "react-router-dom";
import Img_logo from '../images/CN-1.png';

function Navigation() {
  return (
    <div className="nav">
      <nav className="navbar-default">
        <div className="collapse">
        <a class="navbar-left" href="#Home" id="logo">
          <img src={Img_logo} alt="Image"></img>
        </a>

            <ul className="nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutpage">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/client">
                  Client Representation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  FAQ
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contactpage">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

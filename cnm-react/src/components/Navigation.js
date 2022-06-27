import React from "react";
import { NavLink } from "react-router-dom";
import Img_logo from '../images/CN-1.png';

function Navigation() {
  return (
<body>
    <input type="checkbox" id="hamburger-input" class="burger-shower"/>

  <label id="hamburger-menu" for="hamburger-input">
    <nav id="sidebar-menu">
      <h3>Menu</h3>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutpage">About Us</NavLink>
        </li>
        <li>
          <NavLink  to="/service">Services</NavLink>
        </li>
        <li>
          <NavLink to="/client">Client Representation</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/contactpage">Contact</NavLink>
        </li>


      </ul>
    </nav>
  </label>



  <input type="checkbox" id="hamburger-input" class="burger-shower" />

    <nav className="nav-default" for="hamburger-input">

          <div class="navbar-left">
            <NavLink to="/">
            <img src={Img_logo} alt="Image"></img>
            </NavLink>


          </div>


          <ul class="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutpage">About Us</NavLink>
            </li>
            <li>
              <NavLink  to="/service">Services</NavLink>
            </li>
          
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/contactpage">Contact</NavLink>
            </li>
          </ul>
      </nav>

      <div class="overlay"></div>


      <script type="text/javascript" src="../script.js">

          </script>

</body>


  );
}

export default Navigation;

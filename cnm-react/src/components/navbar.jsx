import React from 'react';
import Img_logo from '../images/CN-1.png';

export default function Navbar() {
  return (
  <div class="nav">
  <nav class="navbar-default">
          <div class="collapse">
          <a class="navbar-left" href="#Home" id="logo">
            <img src={Img_logo} alt="Image"></img>
          </a>

          <nav>
            <input type="checkbox" id="nav-check"></input>
            <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
            </label>

              <ul >
                  <li><a class="active" href="#">Home</a></li>
                  <li><a class="page-scroll" href="../aboutpage.html">About Us</a></li>
                  <li><a class="page-scroll" href="#services">Services</a></li>
                  <li><a class="page-scroll" href="#client">Client Representation</a></li>
                  <li><a class="page-scroll" href="#FAQ">FAQ's</a></li>
                  <li><a class="page-scroll" href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
  </nav>
</div>




  );
}

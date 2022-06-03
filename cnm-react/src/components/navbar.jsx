import React from 'react';
import Img_logo from '../images/CN-1.png';

export default function Navbar() {
  return (
  <div id="nav">
  <nav class="navbar-default">
          <div class="collapse">
          <a class="navbar-left" href="#Home" id="logo">
            <img src={Img_logo}></img>
          </a>
          <nav>
              <ul class="nav">
                  <li><a class="page-scroll" href="#about">About Us</a></li>
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

import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Img_logo from '../images/ice_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';

function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);
  return (
<body>
  <nav className='navbar'>

    <div className='navbar-container'>


    <div class="navbar-left">

     <a href="/" aria-current="page" class="w-inline-block w--current">
     <img src={Img_logo} width="100px" href='/' alt="Image"></img>
     </a>


     </div>


  <div className='menu-icon' onClick={handleClick}>
    <i className={click ? 'fa fa-times':'fa fa-bars'}></i>
  </div>

  <ul className={click ? 'nav-menu active':'nav-menu'}>
  <li>
    <NavLink to="/" className='nav-links' onClick={closeMobileMenu}>Home</NavLink>
  </li>
  <li>
    <NavLink to="/aboutpage" className='nav-links' onClick={closeMobileMenu}>About Us</NavLink>
  </li>
  <li>
    <NavLink  to="/service" className='nav-links' onClick={closeMobileMenu}>Services</NavLink>
  </li>
  <li>
    <NavLink to="/faq" className='nav-links' onClick={closeMobileMenu}>FAQ</NavLink>
  </li>
  <li>
    <NavLink to="/contactpage" className='nav-links' onClick={closeMobileMenu}>Contact</NavLink>
  </li>

  </ul>


</div>
</nav>

</body>


  );
}

export default Navigation;

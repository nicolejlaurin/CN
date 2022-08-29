import React from 'react';
import Img_logo from '../images/CN-27.jpg';
import SecondPage from './aboutpage';

export default function About() {
  return (
	<div className='about-CN'>
		<h4>
    Choosing a team that strives for your success.
    </h4>
    <div class="about-split">
    <div class="about-split-left">
		<p>
			CN Agency provides all the necessary services to further an athletes abilities and giving them a platform
      to be seen. We offer services such as sports marketing, player management, personal consultations, NIL education...
      ORR We give players the tools and platform to connect and strategically plan out future plans
      </p>
      <button class="button button2" type="about-button" onclick="document.location='./aboutpage.jsx'">Learn more about us!</button>
    </div>
    <img class= "about-image" src={Img_logo}></img>
    </div>
  </div>

);
}

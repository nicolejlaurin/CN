import React from 'react';
import Img_logo from '../images/CN-3.png';

export default function About() {
  return (
	<div className='about-CN'>
		<h4>
    Choosing a team that strives for your success.
    </h4>
    <div class="about-split">
		<p>
			CN Agency provides all the necessary services to further an athletes abilities and giving them a platform
      to be seen. We offer services such as sports marketing, player management, personal consultations, NIL education...
      ORR We give players the tools and platform to connect and strategically plan out future plans
      </p>
    <img src={Img_logo}></img>
    </div>
    <button class="button button2" onclick="window.open('https://niclaurin.com/');">Learn more about us!</button>

  </div>

);
}

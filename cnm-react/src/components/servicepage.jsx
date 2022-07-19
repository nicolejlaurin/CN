import React from 'react';
import Img_logo from '../images/CN-11.jpg';
import Img_logo2 from '../images/CN-23.jpg';

export default () => (
	<div className='Service-CN'>
	<div className='servicepage-header'>
	<h3>
	Our services
	</h3>
	<div class="service-split">
		<img className='img' src={Img_logo}></img>
		<div className='inside-split1'>
		<h4>
		What We Do
		</h4>

		<p>
		let us help you design a strategic plan to prepare your future. CN Agency provides all the necessary services to further an athletes abilities and giving them a platform
		to be seen. We offer services such as sports marketing, player management, personal consultations, NIL education...
		ORR We give players the tools and platform to connect and strategically plan out future plans

		</p>

		<img className='servicepage-img2' src={Img_logo2}></img>

		</div>
	</div>
	</div>
	</div>
);

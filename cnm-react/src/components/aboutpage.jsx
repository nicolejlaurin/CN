import React from 'react';
import Img_logo from '../images/CN-9.jpg';

export default () => (
	<div className='aboutpage-CN'>

	<div className='aboutpage-header'>
		<h4>
    ABOUT US
    </h4>
	</div>
	<div className='abt-back'>
		<p>
			CN Agency provides all the necessary services to further an athletes abilities and giving them a platform
      to be seen. We offer services such as sports marketing, player management, personal consultations, NIL education...
      ORR We give players the tools and platform to connect and strategically plan out future plans
    </p>
		<p>
		CN Management is an integrated sports management company based in Miami FL. CNM is dedicated to providing the highest quality representation that will plan, support and guide our clients throughout their entire professional life.
	</p>
	</div>
		<div className="aboutpage-split">
			<img src={Img_logo} id="about-img"></img>
			<div className="aboutpage-text">
				<h4> Clinton Noel</h4>
				<p>
				Clinton Noel is a 2019 graduate of Huston Tillotson University undergrad (HBCU) and 2021 graduate of St. Thomas University with a MBA in Sports Administration, specialization in Marketing certification. Noel finished his collegiate basketball career at his alma mater Huston Tillotson. Shortly after graduation, Noel followed his desires and passion to help athletes optimize their careers. Noel core values are integrity, dedication, transparency, and innovation.
				</p>
		</div>

		</div>


	</div>
);

import React from 'react';
import Img_logo from '../images/CN-9.jpg';

export default () => (

	<div className='aboutpage-CN'>


	<div className='abt-back'>
		<h4>
		ABOUT US
		</h4>


		<p>
			CN Agency provides all the necessary services to further an athletes abilities and giving them a platform
      to be seen. We offer services such as sports marketing, player management, personal consultations, NIL education...
      ORR We give players the tools and platform to connect and strategically plan out future plans
    </p>
		<p>
		CN Management is an integrated sports management company based in Miami FL.
		CNM is dedicated to providing the highest quality representation that will plan, support and guide our clients throughout their entire professional life.
		Our company is committed to creating an inclusive and diverse workspace, building long lasting relationships beyond its contractual
		 for athletes to excel and succeed.
	</p>
	</div>
		<div className='abt-back2'>
		<h4> Our Values</h4>
		<hr className="underline"></hr>
		<div className='abt-p'>
		<div>
		<h5> Integrity </h5>
		<p>  We value strong morals and positive values held at the core of CNM. </p>
		</div>
		<div>
		<h5> Respect </h5>
		<p>  Respect is a guiding value to building our family and reaching our mission. </p>
		</div>
		<div>
		<h5> Inclusiveness </h5>
		<p>  We are committed to creating a community open to accepting all people.  </p>
		</div>
		</div>
		</div>
		<div className="aboutpage-split">
			<img src={Img_logo} id="about-img"></img>
			<div className="aboutpage-text">
				<h4 class="name"> Clinton Noel</h4>
				<p>
				Clinton Noel is a 2019 graduate of Huston Tillotson University undergrad (HBCU) and 2021 graduate of St. Thomas University with a MBA in Sports Administration, specialization in Marketing certification. Noel finished his collegiate basketball career at his alma mater Huston Tillotson. Shortly after graduation, Noel followed his desires and passion to help athletes optimize their careers. Noel core values are integrity, dedication, transparency, and innovation.
				</p>
		</div>
		</div>


	</div>
);

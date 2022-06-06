import React from 'react';
import Img_logo from '../images/CN-7.png';

export default () => (
	<div className='sports'>
	<h4>
	Event coordinating, Camp activations and More!
	</h4>
		<div class="about-split">
			<img src={Img_logo}></img>
		<p>
    We provide ...
		camp activations
		autograph signing
    </p>

		</div>
		<button class="button button2"  onclick="window.location.href='links.php'">Learn more about us!</button>


	</div>
);

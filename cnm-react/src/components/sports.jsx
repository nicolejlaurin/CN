import React from 'react';
import Img_logo from '../images/CN-7.png';

export default () => (
	<div className='sports'>
	<h4>
	Event coordinating, camp activations and more!
	</h4>
		<div class="about-split">
			<img class="about-sports-img" src={Img_logo}></img>
		<p>
		CN Management helps athletes maximize their full potential by giving them the platform to reach perfect audience.
		Our highly-experienced team guide our players through their entire journey, connecting them to the right poeple and brands to enhance their career to a whole new level.
    </p>

		</div>
		<button class="button button2"  onclick="window.location.href='links.php'">Learn more about us!</button>


	</div>
);

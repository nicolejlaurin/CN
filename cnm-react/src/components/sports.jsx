import React from 'react';
import Img_logo from '../images/CN-25.png';
import Icon_logo from '../images/right-arrow.png';
import { FaCaretRight, FaChevronRight, FaAngleDoubleRight} from 'react-icons/fa';


export default () => (
	<div className='sports'>
	<h4>What We do</h4>
	<h5>Our highly-experienced team guide our players through their entire journey, connecting them to the right people and brands to enhance their career to a whole new level.</h5>
		<div class="sports-split">
			<img class="sports-img" src={Img_logo}></img>
			<div class="whatwedo-list">
		<p><FaChevronRight></FaChevronRight> Games, tournaments, and events</p>
		<p><FaChevronRight></FaChevronRight> Marketing and branding/brand identity</p>
		<p><FaChevronRight></FaChevronRight> NIL - Name, Image, Likeness </p>
		<p><FaChevronRight></FaChevronRight> Social Media Managementement</p>
		<p><FaChevronRight></FaChevronRight> Endorsement Deals</p>
		<p><FaChevronRight></FaChevronRight> Camp activations</p>
		<p><FaChevronRight></FaChevronRight> Autograph signing</p>
		<p><FaChevronRight></FaChevronRight> Sponsorship package development, sales and activation</p>
		<p><FaChevronRight></FaChevronRight> Social media strategy development and coaching</p>
		<p><FaChevronRight></FaChevronRight> Photography and Videography</p>
		</div>
		</div>
	</div>
);

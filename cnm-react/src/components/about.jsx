import React from 'react';
import Img_logo from '../images/CN-29.jpg';
import SecondPage from './aboutpage';
import { Link }  from 'react-router-dom';


export default function About() {
  return (
	<div className='about-CN'>
		<h4>
    Our Mission
    </h4>
    <div class='about-split'>
    <div class='about-split-left'>
		<p>
		Here at Cold Global Enterprises, we value all our relationships with our clients and partners. We focus heavily on brand development for our clients.  We want each and every client to have a meaningful and positive impact on and off the court. Our agency provides brand management, marketing, career advisor, image management, public relations, personal development, and more. We have a close knit relationship with our athletes and are able to be  personable with our client needs.
      </p>
    <Link to='/aboutpage'>
      <button className="about-button button2" >Learn more about us!</button>
    </Link>
    </div>
    <img class= "about-image" src={Img_logo}></img>
    </div>
  </div>

);
}

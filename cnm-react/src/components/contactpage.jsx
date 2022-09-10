import React from 'react';
import Img_logo from '../images/CN-8.jpg';

export default () => (
	<div class="contact-div">
	<div class="contact-split">
	<div class="contact-split-left">
	<h3>Contact Us</h3>
	<p className="contact-msg">We would love to hear from you.</p>
	<div className="input-row2">
		<div className='input-group2'>
		<p class="top"> coldglobalenterprises@gmail.com </p>
		<p class="bottom"> Miami, Florida</p>

			<iframe className="map"  scrolling={"no"}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229968.14750566523!2d-80.31161124768423!3d25.762228611962264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sen!2sca!4v1660266980915!5m2!1sen!2sca"></iframe>
	</div>
</div>
	</div>
  <form id="contact" action="" method="post">
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Instagram" type="url" tabindex="4" required></input>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
	</div>
	</div>

);

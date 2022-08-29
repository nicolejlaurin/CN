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
			<p class="top"> 3346 Stonebridge Trail, Miami, Florida 33596</p>
			<p class="bottom"> info@dsmsports.com </p>
			<p class="bottom">813.846.1200</p>
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

import React from 'react';
import Img_logo from '../images/CN-8.jpg';

export default () => (
	<div className='contactpage-CN'>
	<h4>Stay Connected</h4>
	<p>We would love to hear from you</p>

	<form id="contact-box" action="" method="post">
	<div className='contact-box'>
		<div className='contact-left'>
			<div className="input-row">
				<div className="input-group">
					<label for="fname" class="text-label">First name</label>
					<input type="text" id="fname" name="fname" class="text-line"></input>
				</div>
			<div className="input-group">
				<label for="lname" class="text-label">Last name</label><br></br>
				<input type="text" id="lname" name="lname" class="text-line"></input>
			</div>
		</div>

		<div className="input-row">
			<div className="input-group">
				<label for="phone" class="text-label">Phone Number</label>
				<input type="text" id="phone" name="phone" class="text-line"></input>
			</div>
			<div className="input-group">
				<label for="email" class="text-label">Email</label>	<br></br>
				<input type="text" id="email" name="email" class="text-line"></input>
			</div>
		</div>

		<div className="input-row">
			<div className='input-group'>
				<label for="Message" class="text-label-message">Your Message</label>
				<textarea data-minlength="10" class="form-control" id="message" name="message" data-error="Minimum of 10 characters" required></textarea>
			</div>
		</div>
		<button type="submit" class="button-about button3">Send</button>
		</div>

		<div className='contact-right'>
			<div className="input-row">
				<div className='input-group'>
					<p class="top"> Our Details </p>
					<p class="bottom"> 3346 Stonebridge Trail  </p>
					<p class="bottom"> Valrico, Florida 33596 </p>
					<p class="bottom"> info@dsmsports.com </p>
					<p class="bottom">813.846.1200</p>
					<img src={Img_logo}></img>
			</div>
		</div>
		</div>

	</div>
	</form>
	</div>
);

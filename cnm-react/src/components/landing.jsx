import React from 'react';
import { Link }  from 'react-router-dom';


export default () => (
	<div className='landing'>
		<h2>
			COLD GLOBAL ENTERPRISES
		</h2>
		<div className='info'>
			<p>Amplifying athletes name, image, likeness, and voices.</p>
			<p>Creating long lasting legacies and building brands to inspire more than just the sports industry.</p>
			<Link to='/contactpage'>
			<button className="button button1">BOOK YOUR CONSULTATION</button>
			</Link>


		</div>
	</div>
);

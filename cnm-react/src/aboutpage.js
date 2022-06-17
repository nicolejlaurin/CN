import './aboutpage.css';
import React from 'react';
import Landing from './components/landing';
import About from './components/aboutpage';


export default function AboutPage() {
  return (
    <div className='app-about'>
		<About />
		<Footer />
	</div>
);
}

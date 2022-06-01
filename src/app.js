import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Service from './components/service';
import Sports from './components/sports';
import Contact from './components/contact';
import ScrollToTop from './components/scroll';
import Footer from './components/footer';
import './main.scss';

export default () => (
	<div className='app'>
		<NavBar />
		<Toolbar id='back-to-top-anchor' />
		<Landing />
		<About />
		<Service />
    <Sports />
    <Contact />
		<ScrollToTop />
		<Footer />
	</div>
);

import './App.css';
import React from 'react';
import NavBar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Service from './components/service';
import Sports from './components/sports';
import Contact from './components/contact';
import Footer from './components/footer';


export default function App() {
  return (
    <div className='app'>
		<NavBar />
		<Landing />
		<About />
		<Service />
    	<Sports />
    	<Contact />
		<Footer />
	</div>

);
}

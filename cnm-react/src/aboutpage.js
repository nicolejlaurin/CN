import './aboutpage.css';
import React from 'react';
import Landing from './components/landing';
import About from './components/aboutpage';
import Footer from './components/footer';


export default function App() {
  return (
    <div className='app-about'>
    <Landing />
		<About />
		<Footer />
	</div>
);
}

import './App.css';
import React from 'react';
import NavBar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Service from './components/service';
import Sports from './components/sports';
import Contact from './components/contactpage';
import Footer from './components/footer';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div className='app'>
		<NavBar />
		<Landing />
		<About />
    <Sports />
    <ContactPage />
		<Footer />
	</div>

);
}

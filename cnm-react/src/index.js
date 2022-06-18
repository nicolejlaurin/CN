import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import AboutPage from './components/aboutpage';
import Service from './components/service';
import ServicePage from './components/servicepage';
import Sports from './components/sports';
import Contact from './components/contact';
import ContactPage from './components/contactpage';
import Footer from './components/footer';
import Navigation from './components/Navigation';
import Client from './components/client';
import FAQ from './components/faq';


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

//this is the links to other pages
ReactDOM.render(

  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<>
  		<Landing />
  		<About />
  		<Service />
      <Sports />
      <Contact />
  

  		</>} />
      <Route path="/about" element={<About />} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/client" element={<Client />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contactpage" element={<ContactPage />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();

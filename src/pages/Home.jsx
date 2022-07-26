import React from 'react'
import Caraosel from '../components/Caraosel';
import About from '../components/About';
import Cards from '../components/Cards';
import Gallery from '../components/Gallery';
import CheckOutVideos from '../components/CheckOutVideos';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
    <Caraosel/>
    <About/>
    <Cards/>
    <Gallery/>
    <CheckOutVideos/>
    <ContactForm/>
    </>
  )
}

export default Home
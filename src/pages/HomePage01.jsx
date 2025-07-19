import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Navbar from "../components/Navbar"
import BookingForm from "../components/BookingForm";
import RoomCategory from "../components/RoomCategory"
import ServiceSection from "../components/ServiceSection";
import Footer from '../components/Footer';



function HomePage01() {
  return (
    <>
      <Navbar />
      <Header />
      <HeroSection />
      <BookingForm />
      <RoomCategory />
      <ServiceSection />
      <Footer /> 
    </>
  );
}

export default HomePage01;


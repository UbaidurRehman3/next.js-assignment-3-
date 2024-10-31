"use client"
// app/pages/index.tsx
import React from 'react';
import Header from './component/header';
import Hero from './component/hero';
import About from './about';
import ContactForm from './contactfrom';
import Footer from './component/footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;

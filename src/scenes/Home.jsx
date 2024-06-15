import React from 'react';
import '../style/main.scss';
import { Header } from '../components/Header';
import { Slider } from './components/Slider';
import { Brand } from './components/Brand';
import { Feature } from './components/Feature';
import { Footer } from '../components/Footer';
import { Sale } from './components/Sale';
import { Rent } from './components/Rent';
import { SearchArea } from './components/SearchArea';
import { Meet } from './components/Meet';
import { Blog } from './components/Blog';
import { Testimonial } from './components/Testimonial';
import { Contact } from './components/Contact';

export const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Brand />
      <Feature />
      <SearchArea />
      <Sale />
      <Rent />
      <Meet />
      <Contact />
      <Blog />
      <Testimonial />
      <Footer />
    </>
  )
}

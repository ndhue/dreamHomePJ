import React from 'react'
import Slider from "react-slick"
import { Heading } from '../../components/Heading';
import { Box } from '../../components/Box';
export const Sale = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: 'linear',
    arrows: false,

    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      }
    ]
  };
  return (
    <section className="flat-sale wg-dream tf-section py-4 md:py-24">
          <Heading
            header="Properties for sale"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
          />
          <div className="feature mx-4 xl:mx-56">
            <div className="tabs">
            <Slider {...settings}>
              <Box
                image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-21.jpg"
                author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-1.jpg"
                sale={true}
              />

              <Box
                image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-22.jpg"
                author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-2.jpg"
                sale={true}
              />

              <Box
                image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-23.jpg"
                author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-3.jpg"
                sale={true}
              />

              <Box
                image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-8.jpg"
                author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-4.jpg"
                sale={true}
              />

              <Box
                image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-21.jpg"
                author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-1.jpg"
                sale={true}
              />

              <Box
                image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-22.jpg"
                author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-2.jpg"
                sale={true}
              />

              <Box
                image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-23.jpg"
                author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-3.jpg"
                sale={true}
              />  
            </Slider>
            </div>
          </div>
    </section>
  )
}

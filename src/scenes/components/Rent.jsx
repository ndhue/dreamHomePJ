import React from 'react'
import Slider from "react-slick"
import { Heading } from '../../components/Heading';
import { Box } from '../../components/Box';
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  cssEase: 'linear',
  arrows: false,

  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
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

export const Rent = () => {
  return (
    <section className="rent tf-section py-4 md:py-24">
      <Heading
        header="Properties for rent"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
      />
      <div className="feature mx-4">
        <div className="tabs">
          <Slider {...settings}>
            <Box
              image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-12.jpg"
              author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-12.jpg"
              sale={true}
            />

            <Box
              image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-13.jpg"
              author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-13.jpg"
              sale={true}
            />

            <Box
              image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-14.jpg"
              author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-14.jpg"
              sale={true}
            />

            <Box
              image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-15.jpg"
              author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-15.jpg"
              sale={true}
            />

            <Box
              image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-16.jpg"
              author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-4.jpg"
              sale={true}
            />

            <Box
              image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-8.jpg"
              author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-1.jpg"
              sale={true}
            />

            <Box
              image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-6.jpg"
              author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-1.jpg"
              sale={true}
            />

            <Box
              image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-12.jpg"
              author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-12.jpg"
              sale={true}
            />

            <Box
              image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-13.jpg"
              author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-13.jpg"
              sale={true}
            />
          </Slider>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Slider from "react-slick"

export const Brand = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      }
    ]
  };
  return (
    <section className='brand'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-section">
              <h4>Trusted by over 150+ major companies</h4>
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                <div className="slide">
                  <img src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-1.png" alt="images" />
                </div>
                <div className="slide">
                  <img src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-2.png" alt="images" />
                </div>
                <div className="slide">
                  <img src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-3.png" alt="images" />
                </div>
                <div className="slide">
                  <img src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-4.png" alt="images" />
                </div>
                <div className="slide">
                  <img src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-5.png" alt="images" />
                </div>
                <div className="slide">
                  <img src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-6.png" alt="images" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

import { Box } from '../../components/Box';
import { Heading } from '../../components/Heading';

export const Feature = () => {

  return (
    <section className="feature home">
      <div className="row px-4">
        <div className="col-lg-12">
          <Heading 
            header="Featured properties"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
          />
          <div className="tabs">
            <div className="box-tab text-center">
              <ul className="menu-tab tab-title flex justify-center">
                <li className="item-title active hv-tool" data-tooltip="8 Property">
                  <h5 className="inner">Houses</h5>
                </li>
                <li className="item-title hv-tool" data-tooltip="6 Property">
                  <h5 className="inner"> Smart home </h5>
                </li>
                <li className="item-title hv-tool" data-tooltip="5 Property">
                  <h5 className="inner ">Apartments</h5>
                </li>
                <li className="item-title hv-tool" data-tooltip="7 Property">
                  <h5 className="inner"> Office </h5>
                </li>
                <li className="item-title hv-tool" data-tooltip="6 Property">
                  <h5 className="inner">Villa</h5>
                </li>
                <li className="item-title hv-tool" data-tooltip="3 Property">
                  <h5 className="inner"> Bungalow </h5>
                </li>
              </ul>
            </div>
            <div className="content-tab mx-auto">
              <div className="content-inner tab-content">
                <div className="wrap-item grid grid-cols-4 gap-4">
                  <Box
                    image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-1.jpg"
                    author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-1.jpg"
                    sale={false}
                  />

                  <Box
                    image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-42.jpg"
                    author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-2.jpg"
                    sale={true}
                  />

                  <Box
                    image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-43.jpg"
                    author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-3.jpg"
                    sale={false}
                  />

                  <Box
                    image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-4.jpg"
                    author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-4.jpg"
                    sale={true}
                  />

                  <Box
                    image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-35.jpg"
                    author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-5.jpg"
                    sale={true}
                  />

                  <Box
                    image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-36.jpg"
                    author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-6.jpg"
                    sale={false}
                  />

                  <Box
                    image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-37.jpg"
                    author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-7.jpg"
                    sale={true}
                  />

                  <Box
                    image="https://themesflat.co/html/dreamhomehtml/assets/images/house/featured-38.jpg"
                    author="https://themesflat.co/html/dreamhomehtml/assets/images/author/author-8.jpg"
                    sale={false}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

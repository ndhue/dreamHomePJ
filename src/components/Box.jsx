import React from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
export const Box = (props) => {
  const { image, author, sale } = props;
  return (
    <div className="box box-dream hv-one m-2">
      <div className="image-group relative">
        <span className="featured text-xs font-semibold">
          Featured
        </span>
        {sale && <span className="featured style text-xs font-semibold">For sale</span>}
        <span className="icon-bookmark">
          <BookmarkBorderOutlinedIcon className='icon' />
        </span>
        <div className="swiper-container">
          <a href="" className="icon-plus"><img src="https://themesflat.co/html/dreamhomehtml/assets/images/icon/plus.svg" alt="images" /></a>
          <div className="swiper-wrapper">
            <div className="swiper-slider">
              <img src={image} alt="images" />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <h3 className="link mb-1 ml-[-1px]">
          <a href="property-detail-v1.html">Gorgeous Apartment Building</a>
        </h3>
        <div className="text-address">
          <p className="text-xs">
            <MapOutlinedIcon className='icon' />
            58 Hullbrook Road, Billesley, B13 0LA
          </p>
        </div>
        <div className="money">
          <a href="property-detail-v1.html">$7,500</a>
        </div>
        <div className="icon-box flex text-sm">
          <div className="icons icon-1 flex">
            <SingleBedOutlinedIcon className='icon' />
            <span>Beds: </span>
            <span className='font-medium'>4</span>
          </div>
          <div className="icons icon-2 flex">
            <BathtubOutlinedIcon className='icon' />
            <span>Baths: </span>
            <span className='font-medium'>2</span>
          </div>
          <div className="icons icon-3 flex">
            <StraightenOutlinedIcon className='icon' />
            <span>Sqft: </span>
            <span className='font-medium'>1150</span>
          </div>
        </div>
        <div className="days-box flex justify-between items-center text-[15px]">
          <a href="" className="compare font-semibold text-center">
            Compare
          </a>
          <div className="img-author">
            <img src={author} alt="images" />
          </div>
          <div className="days">3 years ago</div>
        </div>
      </div>
    </div>
  )
}
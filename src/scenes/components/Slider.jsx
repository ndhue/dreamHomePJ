import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Button from '../../components/Button';
import CountUp from 'react-countup';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
export const Slider = () => {
  return (
    <section className='slider home'>
      <div className="slider-item">
        <div className="img-slider">
          <img className="img-item" src="https://themesflat.co/html/dreamhomehtml/assets/images/slider/bg-slider-1.png" alt="img1" />
        </div>

        <div className="max-w-[1520px] overflow-hidden relative w-full">
          <div className="row">
            <div className="col-lg-12">
              <div className="content content-two ml-2">
                <div className="heading">
                  <h1 className="leading-none">
                    We will find a perfect home for you
                  </h1>
                  <p className='text-base md:text-lg leading-6 font-normal'>Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you</p>
                </div>
                <div className="flat-tabs themesflat-tabs">
                  <div className="box-tab text-center">
                    <ul className="menu-tab tab-title flex">
                      <li className="item-title active">
                        <h4 className="inner">Rent</h4>
                      </li>
                      <li className="item-title style">
                        <h4 className="inner">Buy</h4>
                      </li>
                    </ul>
                  </div>
                  <div className="content-tab">
                    <div className="content-inner tab-content-active">
                      <div className="form">
                        <form>
                          <div className="wd-find-select flex">
                            <div className="inner-group">
                              <div className="form-group-1 search-form form-style">
                                <input
                                  className="search-field placeholder:text-black block border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-orange focus:ring-orange focus:ring-1
                                  p-3"
                                  placeholder="Type keyword..."
                                  type="text"
                                  name="search"
                                />
                              </div>
                              <div className="form-group-2 form-style">
                                <select id="countries" className="p-3 rounded-md w-full block  border border-slate-300 shadow-sm focus:outline-none focus:border-orange focus:ring-orange
                                focus:ring-offset-0">
                                  <option defaultValue>Property type</option>
                                  <option value="">House</option>
                                  <option value="">Smart Home</option>
                                  <option value="">Office</option>
                                  <option value="">Villa</option>
                                </select>
                              </div>
                              <div className="form-group-3 form-style">
                                <select id="countries" className="p-3 rounded-md w-full block  border border-slate-300 shadow-sm focus:outline-none focus:border-orange focus:ring-orange focus:ring-offset-0">
                                  <option defaultValue>Location</option>
                                  <option value="">Japan</option>
                                  <option value="">America</option>
                                  <option value="">England</option>
                                  <option value="">France</option>
                                </select>
                              </div>

                            </div>
                            <div className="mx-2 form-group-4 form-style">
                              <a className="icon-filter pull-right">
                                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3 10.5V0.75M3 10.5C3.39782 10.5 3.77936 10.658 4.06066 10.9393C4.34196 11.2206 4.5 11.6022 4.5 12C4.5 12.3978 4.34196 12.7794 4.06066 13.0607C3.77936 13.342 3.39782 13.5 3 13.5M3 10.5C2.60218 10.5 2.22064 10.658 1.93934 10.9393C1.65804 11.2206 1.5 11.6022 1.5 12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5M3 17.25V13.5M15 10.5V0.75M15 10.5C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5M15 10.5C14.6022 10.5 14.2206 10.658 13.9393 10.9393C13.658 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.658 12.7794 13.9393 13.0607C14.2206 13.342 14.6022 13.5 15 13.5M15 17.25V13.5M9 4.5V0.75M9 4.5C9.39782 4.5 9.77936 4.65804 10.0607 4.93934C10.342 5.22064 10.5 5.60218 10.5 6C10.5 6.39782 10.342 6.77936 10.0607 7.06066C9.77936 7.34196 9.39782 7.5 9 7.5M9 4.5C8.60218 4.5 8.22064 4.65804 7.93934 4.93934C7.65804 5.22064 7.5 5.60218 7.5 6C7.5 6.39782 7.65804 6.77936 7.93934 7.06066C8.22064 7.34196 8.60218 7.5 9 7.5M9 17.25V7.5" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </a>
                            </div>
                            <div className="mx-2 button-search sc-btn-top">
                              <Button className="w-full">
                                <span>Search Now</span>
                                <SearchOutlinedIcon className='w-3 h-3 ml-2' />
                              </Button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="themes-count flex">
                  <div className="counter-box one">
                    <div className="count-number">
                      <div className="number number-style">
                        <CountUp start={450} end={1500} duration={2} />
                        <span>+</span>
                      </div>
                    </div>
                    <div className="title-count">
                      Property ready
                    </div>
                  </div>
                  <div className="counter-box">
                    <div className="count-number">
                      <div className="number number-style">
                        <CountUp start={50} end={700} duration={2} />
                        <span>+</span>
                      </div>
                    </div>
                    <div className="title-count">
                      Property ready
                    </div>
                  </div>
                </div>
              </div>
              <div className="images content-one">
                <div className="image">
                  <img className="img-item" src="https://themesflat.co/html/dreamhomehtml/assets/images/slider/slider-1.png" alt="img2" />
                </div>
              </div>
              <div className="curved-group home">
                <div className="curved-text animate-spin-slow">
                  <div><span className="char0">e</span></div><div><span className="char1">s</span></div><div><span className="char2">t</span></div><div><span className="char3">a</span></div><div><span className="char4">t</span></div><div><span className="char5">e</span></div><div><span className="char6"> </span></div><div><span className="char7">f</span></div><div><span className="char8">i</span></div><div><span className="char9">n</span></div><div><span className="char10">d</span></div><div><span className="char11"> </span></div><div><span className="char12">y</span></div><div><span className="char13">o</span></div><div><span className="char14">u</span></div><div><span className="char15">r</span></div><div><span className="char16"> </span></div><div><span className="char17">d</span></div><div><span className="char18">r</span></div><div><span className="char19">e</span></div><div><span className="char20">a</span></div><div><span className="char21">M</span></div><div><span className="char22">s</span></div><div><span className="char23"> </span></div><div><span className="char24">r</span></div><div><span className="char25">e</span></div><div><span className="char26">a</span></div><div><span className="char27">l</span></div>
                  <ArrowUpwardOutlinedIcon className='slider-icon absolute right-[35%] top-[38%] rotate-45'/>
                  </div>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

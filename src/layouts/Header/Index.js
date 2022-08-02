import React from 'react'
import BgImage from '../../assets/main-slider-1-1.png'
const Index = () => {
  return (
    <>
         {/* <!--Main Slider Start--> */}
        <section className="main-slider">
            <div className="main-slider-ripped-paper">
            </div>
            <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": false'>
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="image-layer"
                            style={{backgroundImage: 'url('+BgImage+')'}}>
                        </div>
                        {/* <!-- /.image-layer --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7">
                                    <div className="main-slider__content">
                                        <p>We are Passionate About Laundry</p>
                                        <h2>Laundry <span>&</span> Dry <br/> Cleaning Service </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>

               

            </div>
        </section>
        
    </>
  )
}

export default Index
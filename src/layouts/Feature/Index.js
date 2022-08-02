import React from 'react'
import Ratting from '../../assets/ic_ratting.svg'
import Payonline from '../../assets/ic_pay_online.svg'
import Savetime from '../../assets/ic_save_time.svg'
import WelcomeOne from '../../assets/welcome-one-img-1.png'
import WelcomeOneSmall from '../../assets/welcome-one-small-img.png'
import Clean from '../../assets/ic_clean_results.svg'
import FastDelivery from '../../assets/ic_fast_delivery.svg'
import WelcomeShape from '../../assets/welcome-ond-shape-2.png'
const Index = () => {
  return (
    <>
        {/* <!--Feature One Start--> */}
        <section  className="feature-one">
            <div className="feature-one__container">
                <div className="feature-one__inner">
                    <div className="row">
                        <div className="col-xl-4 col-lg wow fadeInUp" data-wow-delay="100ms">
                            {/* <!--Feature One Single--> */}
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <img src={Savetime} />
                                    
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">
                                        <a href="about.html">Save Time & Money</a>
                                    </h3>
                                    <p className="feature-one__text">Lorem ium dolor sit amet pisicing elit sed do ut.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg wow fadeInUp" data-wow-delay="200ms">
                            {/* <!--Feature One Single--> */}
                            <div className="feature-one__single feature-one__single-base">
                                <div className="feature-one__icon">
                                    <img src={Payonline} />
                                   
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">
                                        <a href="about.html">Pay Online in Seconds</a>
                                    </h3>
                                    <p className="feature-one__text">Lorem ium dolor sit amet pisicing elit sed do ut.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg wow fadeInUp" data-wow-delay="300ms">
                            {/* <!--Feature One Single--> */}
                            <div className="feature-one__single feature-one__single-black">
                                <div className="feature-one__icon">
                                    <img src={Ratting} />
                                   
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">
                                        <a href="about.html">Satisfaction Guarantee</a>
                                    </h3>
                                    <p className="feature-one__text">Lorem ium dolor sit amet pisicing elit sed do ut.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--Feature One End--> */}
        {/* <!--Welcome One Start--> */}
        <section id="aboutus"  className="welcome-one">
            <div  className="welcome-one-shape-2"><img src={WelcomeShape} alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="welcome-one__left">
                            <div className="welcome-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div  className="welcome-one__img">
                                    <img src={WelcomeOne} alt=""/>
                                </div>
                                <div className="welcome-one__small-img">
                                    <img src={WelcomeOneSmall} alt=""/>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="welcome-one__right">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">About Little Introduction</span>
                                <h2 className="section-title__title">We Made Dry Cleaning & Laundry Simple</h2>
                            </div>
                            <p className="welcome-one__text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud
                                exercitation.</p>
                            <div className="welcome-one__button-call">
                                    <div className="welcome-one__call">
                                        <div className="welcome-one__call-icon">
                                            <span>
                                                <img src={Clean}/>
                                            </span>
                                        </div>
                                        <div className="welcome-one__call-content">
                                            <p className="welcome-one__call-head">Clean Result</p>
                                            <p className="welcome-one__call-desc">But I must explain to you how all this mistaken</p>
                                        </div>
                                    </div>
                                <div className="welcome-one__call">
                                    <div className="welcome-one__call-icon">
                                        <span>
                                            <img src={FastDelivery}/>
                                        </span>
                                    </div>
                                    <div className="welcome-one__call-content">
                                        <p className="welcome-one__call-head">Fast Delivery</p>
                                        <p className="welcome-one__call-desc">But I must explain to you how all this mistakn</p>
                                    </div>
                                </div>
                            </div>
                            <div className="welcome-one__call-more">
                                <p className="welcome-one__call-head">More About Laundry Services <span
                                    className="icon-right-arrow"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--Welcome One End--> */}
    </>
  )
}

export default Index
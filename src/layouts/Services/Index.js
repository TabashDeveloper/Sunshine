import React from 'react'
import Service1 from '../../assets/services-1-1.png'
import Service2 from '../../assets/services-1-2.png'
import Service3 from '../../assets/services-1-3.png'
import BestSolution from '../../assets/best-solution-img.png'
import BestSolution1 from '../../assets/ic_best_solution.svg'
import Affordable from '../../assets/ic_affordable.svg'
import Convenience from '../../assets/ic_convenience.svg'
import HighQuality from '../../assets/ic_high_quality.svg'
import Hygienic from '../../assets/ic_hygienic.svg';
import WhyChoose from '../../assets/why-choose-one-img-1.png';
const Index = () => {
  return (
    <>
        {/* <!--Services One Start--> */}
        <section id="ourservices" className="services-one">
            <div className="container">
                <div className="section-title text-center">
                    <h2  className="section-title__title">Our Services</h2>
                    <p className="welcome-one__call-desc">Just drop-off your clothes at any of our stores or request for a pick up online. We will do the rest! We<br/> wash, dry and iron your clothes, you just have to ask.</p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        {/* <!--Services One Single--> */}
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src={Service1} alt="Service_image"/>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><a href="dry-cleaning.html">Drapery</a></h3>
                                <p className="services-one__text">Dupioni silk is centuries old and has always remained a favourite as it offers the intricately</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        {/* <!--Services One Single--> */}
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src={Service2} alt="Service_image"/>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><a href="steam-iron.html">Steam Iron</a></h3>
                                <p className="services-one__text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        {/* <!--Services One Single--> */}
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src={Service3} alt="Service_image"/>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><a href="laundry-service.html">Laundry Service</a></h3>
                                <p className="services-one__text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--Services One End--> */}
        {/* <!--Best Solution Start--> */}
              <section className="best-solution">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="best-solution__left">
                                <div className="best-solution__img">
                                    <img src={BestSolution} alt="best_solution"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="best-solution__right">
                                <div className="best-solution__content">
                                    <h3 className="best-solution__title">The Best Solution for Your Dirty Laundry</h3>
                                    <p className="best-solution__text">Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                                        do. Nullam mollis is usto efficitur.</p>
                                    <div className="best-solution__icon">
                                        {/* <!-- <span className="icon-laundry-basket-1"></span> --> */}
                                        <img src={BestSolution1} alt="Best_Solution"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Best Solution End--> */}
            {/* <!--Why Choose Start--> */}
            <section className="why-choose-one">
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="section-title__title">Why Choose Sun Shine</h2>
                        <p className="welcome-one__call-desc">Just drop-off your clothes at any of our stores or request for a pick up online. We will do the rest! We<br/> wash, dry and iron your clothes, you just have to ask.</p>
                    </div>
                    <div className="why-choose-one__cont">
                        <div className="why-choose-one__left">
                            <div className="why-choose-one__box">
                                <div>
                                    <img className="why-choose-one__icon" src={Affordable} alt="Affordable"/>
                                </div>
                                <div>
                                    <h3 className="why-choose-one__title">Affordable Pricing</h3>
                                    <p className="why-choose-one__text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</p>
                                </div>
                            </div>
                            <div className="why-choose-one__box">
                                <div>
                                    <img className="why-choose-one__icon" src={Convenience} alt="Convenience"/>
                                </div>
                                <div>
                                    <h3 className="why-choose-one__title">Convenience</h3>
                                    <p className="why-choose-one__text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</p>
                                </div>
                            </div>
                            <div className="why-choose-one__box">
                                <div>
                                    <img className="why-choose-one__icon" src={HighQuality} alt="High_Quality"/>
                                </div>
                                <div>
                                    <h3 className="why-choose-one__title">High Quality</h3>
                                    <p className="why-choose-one__text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</p>
                                </div>
                            </div>
                            <div className="why-choose-one__box">
                                <div>
                                    <img className="why-choose-one__icon" src={Hygienic} alt="Hygienic"/>
                                </div>
                                <div>
                                    <h3 className="why-choose-one__title">Hygienic</h3>
                                    <p className="why-choose-one__text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</p>
                                </div>
                            </div>
                        </div>
                        <div className="why-choose-one__img">
                            <img src={WhyChoose} alt="Why_Choose"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Why Choose Start--> */}
    </>
  )
}

export default Index
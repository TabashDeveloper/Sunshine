import React from 'react'
import FooterLogo from '../../assets/ic_footer_logo.svg'
const Index = () => {
  return (
    <>
                {/* <!--Site Footer Start--> */}
        <footer className="site-footer">
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4" >
                            <div className="site-footer__bottom-inner">
                                <img src={FooterLogo} alt="footer_logo"/>

                            </div>
                        </div>
                        <div className="col-lg-5" >
                            <div className="site-footer__bottom-inner">
                                <p className="site-footer__bottom-text">Copyright © 2004–2022 .<a href="#">Sunshine Organic Cleaners & Laundry</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3"> 
                            <div className="site-footer__bottom-inner">
                              
                                <ul className="list-unstyled site-footer__bottom-menu">
                                    <li><a href="about.html">Terms & Condition</a></li>
                                    {/* <!-- <li><span>/</span></li> --> */}
                                    <li><a href="about.html">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!--Site Footer End--> */}
        <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        {/* <!-- /.mobile-nav__overlay --> */}
        <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

            <div className="logo-box">
                <a href="index.html" aria-label="logo image"><img src={FooterLogo} width="155"
                        alt="logo" /></a>
            </div>
            {/* <!-- /.logo-box --> */}
            <div className="mobile-nav__container"></div>
            {/* <!-- /.mobile-nav__container --> */}
{/* <!-- 
            <ul className="mobile-nav__contact list-unstyled">
                <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:needhelp@packageName__.com">needhelp@qondri.com</a>
                </li>
                <li>
                    <i className="fa fa-phone-alt"></i>
                    <a href="tel:666-888-0000">666 888 0000</a>
                </li>
            </ul> -->
            <!-- /.mobile-nav__contact -->
            <!-- <div className="mobile-nav__top">
                <div className="mobile-nav__social">
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-facebook-square"></a>
                    <a href="#" className="fab fa-pinterest-p"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div><!-- /.mobile-nav__social -->
            </div> -->
            <!-- /.mobile-nav__top --> */}



        </div>
        {/* <!-- /.mobile-nav__content --> */}
    </div>
    {/* <!-- /.mobile-nav__wrapper --> */}

    <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        {/* <!-- /.search-popup__overlay --> */}
        <div className="search-popup__content">
            <form action="#">
                <label for="search" className="sr-only">search here</label>
                {/* <!-- /.sr-only --> */}
                <input type="text" id="search" placeholder="Search Here..." />
                <button type="submit" aria-label="search submit" className="thm-btn">
                    <i className="icon-magnifying-glass"></i>
                </button>
            </form>
        </div>
        {/* <!-- /.search-popup__content --> */}
    </div>
    {/* <!-- /.search-popup --> */}

    <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
    </>
  )
}

export default Index
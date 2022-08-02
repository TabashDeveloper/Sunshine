import React from "react";
import logo from "../../assets/ic_logo.svg";

const Index = () => {
  return (
    <>
      <header className="main-header clearfix" id="home">
        <nav className="main-menu clearfix">
          <div className="main-menu-wrapper clearfix">
            <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__logo">
                <a href="index.html">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="main-menu-wrapper__right">
              <div className="main-menu-wrapper__main-menu">
                <a href="#" className="mobile-nav__toggler">
                  <i className="fa fa-bars"></i>
                </a>
                <ul className="main-menu__list">
                  <li className="dropdown current">
                    <a href="#home">Home</a>
                  </li>
                  <li className="dropdown">
                    <a href="#aboutus">About Us</a>
                  </li>
                  <li className="dropdown">
                    <a href="#ourservices">Our Services</a>
                  </li>
                  <li className="dropdown">
                    <a href="#howworks">How Works</a>
                  </li>
                  <li>
                    <a href="#contactus">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="main-menu-wrapper__search-call">
                <div className="main-menu-wrapper__call">
                  <div className="main-menu-wrapper__call-icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="main-menu-wrapper__call-number">
                    <p>Call Anytime</p>
                    <h5>
                      <a href="tel:926668880000">+1 6668880000</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
};

export default Index;

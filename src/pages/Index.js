import React from 'react'
import Navigation from '../components/Navigation/Index';
import Header from '../layouts/Header/Index';
import Feature from '../layouts/Feature/Index';
import Services from '../layouts/Services/Index';
import Working from '../layouts/Working/Index';
import Pickup from '../layouts/PickUp/Index';
import Footer from '../layouts/Footer/Index';
const Index = () => {
  return (
    <div className="page-wrapper">
        <Navigation/>
        <Header/>
        <Feature/>
        <Services/>
        <Working/>
        <Pickup/>
        <Footer/>
    </div>
  )
}

export default Index
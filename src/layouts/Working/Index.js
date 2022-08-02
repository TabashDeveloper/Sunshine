import React from 'react'
import Clothes from '../../assets/ic_pickup_cloths.svg'
import Laundry from '../../assets/ic_laundry.svg'
import Fold from '../../assets/ic_fold.svg'
import Delivery from '../../assets/ic_clothes_deliver.svg'
export const Index = () => {
  return (
    <>
         <div id="howworks" className="sunshine-work-container">
                <div className="sunshine-work-container-headings container" >
                    <h2 className="section-title__title">How Sunshine Works</h2>
                    <p className="sub-heading">Keep up a vital separation from the hussle of Washing Cloths. Book your Laundry in your general region with Watertown. Book Now and Avail Great Discounts on Your Next Order.    </p>
                </div>
                 <div className="sunshine-work-main container ">
                    
                     <div className="card">
                        
                             <img src={Clothes} alt="clothes"/>
                       
                      <div className="text-div">
                          <h5 className="title">Pick up your clothes</h5>
                          <p className="subtitle">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          </p>
                      </div>   
                     </div>
                     <div className="card">
                        
                             <img src={Laundry} alt="clothes"/>
                       
                      <div className="text-div">
                          <h5 className="title">Pick up your clothes</h5>
                          <p className="subtitle">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                          </p>
                      </div>   
                     </div>
                     <div className="card">
                        
                             <img src={Fold} alt="clothes"/>
                        
                      <div className="text-div">
                          <h5 className="title">Pick up your clothes</h5>
                          <p className="subtitle">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                          </p>
                      </div>   
                     </div>
                     <div className="card">
                        
                             <img src={Delivery} alt="clothes"/>
                        
                      <div className="text-div">
                          <h5 className="title">Pick up your clothes</h5>
                          <p className="subtitle">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                          </p>
                      </div>   
                     </div>
                 </div>
             </div>
    </>
  )
}

export default Index;
import React  from 'react';
import {useContentState } from '../../context';

const BrandbannerSection = props => {
  const contentDetails = useContentState();
    return (
      <section id="screenshots" className="section  screenshots-area backgroung-blue  ptb_50 ">
        <div className="container ">

          <div className="row justify-content-center padd ">
            <div className="col-12 col-md-10 col-lg-7 ">
              <div className=" text-center">
              <h4 className="text-white">{contentDetails.BrandbannerSectionContent.heading}</h4>
              </div>
          </div>
          </div>

          <div className="row mt-3">
          <div className="col-12">
            {/* App Screenshot Slider Area */}
            <div className="app-screenshots">
              {/* Single Screenshot Item */}
              {contentDetails.BrandbannerSectionContent.data.map((item, idx) => {
                return(
                  <div  key={`so_${idx}`} className="single-brand">
                    <a href= {item.href} >
                    <img src={item.image} alt="" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          </div>


        </div>
        <div className="col-12"> </div>

      </section>
    );
  
}

export default BrandbannerSection;
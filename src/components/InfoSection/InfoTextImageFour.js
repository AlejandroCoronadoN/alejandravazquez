import React from 'react';
import {useContentState } from '../../context';

const InfoTextImageFour = props => {
  const contentDetails = useContentState();
    return (
      <section className="section service-area bg-gray overflow-hidden ptb_100">
        <div className="container">
          <div className="row justify-content-between">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            {/* Service Text */}
            <div className="service-text pt-4 pt-lg-0">
            <h2 className="text-capitalize mb-4">{contentDetails.InfoTextImageFour.heading}</h2>
            {/* Service List */}
            <ul className="service-list">
              {contentDetails.InfoTextImageFour.serviceData.map((item, idx) => {
                return(
                  <div key={`so_${idx}`}>
                    {/* Single Service */}
                    <li className="single-service media py-2">
                      <div className="service-icon pr-4">
                        <span><i className={item.iconClass} /></span>
                      </div>
                      <div className="service-text media-body">
                        <p>{item.text}</p>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
            <div className="section-heading text-center top-buffer-5">
              <a href="/asesoria" className="landing-button btn mt-1 ">{contentDetails.InfoTextImageFour.button}</a> 
            </div>
            </div>

          </div>
          <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-lg-block">
            {/* Service Thumb */}
            <div className="service-thumb mx-auto">
            <img src={contentDetails.InfoTextImageFour.thumbOne} alt="" />
            </div>
          </div>
          </div>
        </div>
      </section>
    );
}

export default InfoTextImageFour;
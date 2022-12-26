
import React from 'react';
import {  useContentState } from '../../context';

const InfoImageTextTwo = props =>{
  const contentDetails = useContentState();
    return (
      <section className="section discover-area overflow-hidden ptb_100">
        <div className="container">
          <div className="row justify-content-between">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            {/* Discover Thumb */}
            <div className="service-thumb discover-thumb mx-auto pt-5 pt-lg-0">
              <img src={  contentDetails.InfoImageTextTwo.thumbOne} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            {/* Discover Text */}
            <div className="discover-text pt-4 pt-lg-0">
            <h2 className="pb-4 pb-sm-0">{  contentDetails.InfoImageTextTwo.heading}</h2>
            <p className="d-none d-sm-block pt-3 pb-4">{  contentDetails.InfoImageTextTwo.headingText}</p>
            {/* Check List */}
            <ul className="check-list">
              {contentDetails.InfoImageTextTwo.discoverData.map((item, idx) => {
                return(
                  <div key={`do_${idx}`}>
                    <li className="py-2">
                      {/* List Box */}
                      <div className="list-box media">
                        <span className="icon align-self-center"><i className={item.iconClass} /></span>
                        <span className="media-body pl-2">{item.text}</span>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>

            <div className="section-heading top-buffer-5">
              <a href="/asesoria" className="landing-button btn mt-1 ">{contentDetails.InfoImageTextTwo.button}</a>
            </div>

            </div>
          </div>
          </div>
        </div>
      </section>
    );
  
}

export default InfoImageTextTwo;
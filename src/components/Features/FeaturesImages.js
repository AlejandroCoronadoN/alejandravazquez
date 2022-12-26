import React  from 'react';
import {useContentState } from '../../context';

const FeaturesImages = props => {
  const contentDetails = useContentState();

  return (
    <section id="features" className="section features-area style-two overflow-hidden ptb_100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              {/*<span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                <i className="far fa-lightbulb text-primary mr-1" />
                <span className="text-primary">{contentDetails.FeaturesImagesContent.preHeading}</span> {contentDetails.FeaturesImagesContent.preHeadingspan}
              </span>
  */}     
              <h2>{contentDetails.FeaturesImagesContent.heading}</h2>
              <p className="d-none d-sm-block mt-4">{contentDetails.FeaturesImagesContent.headingText}</p>
              <p className="d-block d-sm-none mt-4">{contentDetails.FeaturesImagesContent.headingTexttwo}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {contentDetails.FeaturesImagesContent.featureData.map((item, idx) => {
            return(
              <div key={`fo_${idx}`} className="col-12 col-md-6 col-lg-4 res-margin">
                {/* Image Box */}
                <div className="image-box text-center icon-1 p-5">
                {/* Featured Image */}
                <div className="featured-img mb-3">
                  <img src={item.image} alt="" height="70px"/>
                </div>
                {/* Icon Text */}
                <div className="icon-text">
                  <h3 className="mb-2">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center top-buffer-5">
          <div className="">
            <a href="/about-us" className="landingpage-button btn mt-1">{contentDetails.FeaturesImagesContent.button}</a>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default FeaturesImages;
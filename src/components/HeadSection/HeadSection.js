
import React from 'react';
import { useContentState, useAuthDispatch } from '../../context';

const HeadSection = props =>{
    const dispatch = useAuthDispatch();

  const contentDetails = useContentState();
  return (
    <section id="home" className="section welcome-area overflow-hidden d-flex align-items-center ">
      <div className="container">
        
        <div className="text-center  ">
          {/* Welcome Intro Start */}
          <div className="col-12 col-md-12 col-lg-12">
            <div className="welcome-intro">
              <h1 className="text-blue ">{contentDetails.HeadSectionContent.heading}</h1>
              <p className="text-blue my-4 h2-font  ">{contentDetails.HeadSectionContent.content}</p>

              {/* Store Buttons */}

            </div>
            <div className="">
                <a href="/asesoria" className="landing-button btn  mt-1">{contentDetails.HeadSectionContent.button}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-bottom">

      </div>
      {
      //<button onClick={start_payment}>
      //  Activate Lasers
      //</button>


      }
    </section>
  );
}

export default HeadSection;
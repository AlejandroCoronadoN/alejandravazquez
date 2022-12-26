import React  from 'react';
import {useContentState } from '../../context';

const FooterCenter = props => {
  const contentDetails = useContentState();

    return (
      <footer className="section inner-footer bg-gray ptb_100">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            {/* Footer Items */}
            <div className="footer-items text-center">
            {/* Logo */}
            <a className="navbar-brand" href="/#">
              <img className="logo" src={  contentDetails.FooterSectionContent.image} alt="" />
            </a>
            <p className="mt-2 mb-3">{  contentDetails.FooterSectionContent.text}</p>

                <div className="social-icons d-flex  justify-content-center">
                  {  contentDetails.FooterSectionContent.iconList.map((item, idx) => {
                    return(
                      <a key={`fi_${idx}`} className={item.class} href={item.link} >
                        <i className={item.iconClass} />
                        <i className={item.iconClass} />
                      </a>
                    );
                  })}
                </div>
            <ul className="d-flex flex-column flex-sm-row justify-content-between">
              {contentDetails.FooterSectionContent.footerList_1.map((item, idx) => {
                return(
                  <li key={`fl_${idx}`} className="py-2"><a href={item.link}>{item.text}</a></li>
                );
              })}
            </ul>
            {/* Copyright Area */}
            <div className="copyright-area border-0 pt-3">
              <p>Made with <i className="fas fa-heart" /> By <a href="/#">Amaru MX</a></p>
            </div>
            </div>
          </div>
          </div>
        </div>
      </footer>
    );
              
}

export default FooterCenter;
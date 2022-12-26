import React  from 'react';
import {useContentState } from '../../context';

const FooterLeft = props => {
  const contentDetails = useContentState();

    return (
      <div>
        <div className="height-emulator d-none d-lg-block" />
        <footer className="footer-area footer-fixed">
          {/* Footer Top */}
          <div className="footer-top ptb_100">
            <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-6">
              {/* Footer Items */}
              <div className="footer-items">
                {/* Logo */}
                <a className="navbar-brand" href="/#">
                <img className="logo" src={  contentDetails.FooterSectionContent.image} alt="" />
                </a>
                <p className="mt-2 mb-3">{  contentDetails.FooterSectionContent.text}</p>
                {/* Social Icons */}
                <div className="social-icons d-flex">
                  {  contentDetails.FooterSectionContent.iconList.map((item, idx) => {
                    return(
                      <a key={`fi_${idx}`} className={item.class} href={item.link} >
                        <i className={item.iconClass} />
                        <i className={item.iconClass} />
                      </a>
                    );
                  })}
                </div>
              </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
              {/* Footer Items */}
              <div className="footer-items">
                {/* Footer Title */}
                <h3 className="footer-title mb-2">{  contentDetails.FooterSectionContent.linkText_1}</h3>
                <ul>
                  {  contentDetails.FooterSectionContent.footerList_1.map((item, idx) => {
                    return(
                      <li key={`flo_${idx}`} className="py-2"><a href={item.link}>{item.text}</a></li>
                    );
                  })}
                </ul>
              </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
              {/* Footer Items */}
              <div className="footer-items">
                {/* Footer Title */}
                <h3 className="footer-title mb-2">{  contentDetails.FooterSectionContent.linkText_2}</h3>
                <ul>
                  {  contentDetails.FooterSectionContent.footerList_2.map((item, idx) => {
                    return(
                      <li key={`flt_${idx}`} className="py-2"><a href={item.link}>{item.text}</a></li>
                    );
                  })}
                </ul>
              </div>
              </div>



            </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
            <div className="row">
              <div className="col-12">
              {/* Copyright Area */}
              <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                {/* Copyright Left */}
                <div className="copyright-left">© Copyrights 2020 Amaru Psicología S.A.P.I de C.V All rights reserved.</div>
                {/* Copyright Right */}
                <div className="copyright-right">Made with <i className="fas fa-heart" /> from <a href="/#"> Mexico</a></div>
              </div>
              </div>
            </div>
            </div>
          </div>
        </footer>
      </div>
    );
  
}

export default FooterLeft;
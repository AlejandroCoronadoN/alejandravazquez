import ContactForm from './ContactForm';
import React  from 'react';
import {useContentState } from '../../context';

const ContactInfo = props => {
  const contentDetails = useContentState();

  return (
      <section id="contact" className="contact-area bg-gray ptb_100">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading text-center">
            <h2 className="text-capitalize">{contentDetails.ContactSectionContent.heading}</h2>
            <p className="d-none d-sm-block mt-4">{contentDetails.ContactSectionContent.headingText}</p>
            <p className="d-block d-sm-none mt-4">{contentDetails.ContactSectionContent.headingTexttwo}</p>
            </div>
          </div>
          </div>
          <div className="row justify-content-between">
          <div className="col-12 col-md-6">
            {/* Contact Us */}
            <div className="contact-us">
            <p className="mb-3">{contentDetails.ContactSectionContent.content}</p>
              <ul>
                {contentDetails.ContactSectionContent.iconList.map((item, idx) => {
                  return(
                    <li key={`ci_${idx}`} className="py-2">
                      <a className="media" href="/#">
                        <div className="social-icon ">
                          <i className={item.iconClass} />
                        </div>
                        <span className="pl-3 media-body align-self-center">{item.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-4 pt-md-0">
            <ContactForm />
          </div>
          </div>
        </div>
      </section>
    );
  
}

export default ContactInfo;
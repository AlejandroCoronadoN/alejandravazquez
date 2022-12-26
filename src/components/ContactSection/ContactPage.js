import ContactForm from './ContactForm';
import Header from '../HeaderSection/Header';
import Breadcrumb from '../Filesystem/Breadcrumb';
import FooterSection from '../FooterSection/FooterLeft';
import React , {useEffect, useState} from 'react';
import {useContentState } from '../../context';

const ContactPage = props => {
  const contentDetails = useContentState();
  const [loadState, setLoadState] = useState(false);
  const [loadMessage, setLoadMessage] = useState('Creando tu espacio seguro ...')
  const [loadHeader, setLoadHeader] = useState('Cargando')
  const [loadButtonText, setLoadButtonText] = useState('')
  const [loadButtonLink, setLoadButtonLink] = useState('/login')

    return (
      <div className="contact-page">
        {/*====== Scroll To Top Area Start ======*/}
        <div id="scrollUp" title="Scroll To Top">
          <i className="fas fa-arrow-up" />
        </div>
        {/*====== Scroll To Top Area End ======*/}
        <div className="main">
        <Header 
            imageData={"/img/logo-white.png"} 
            setLoadState={setLoadState} 
            loadState ={loadState}
            loadMessage =  {loadMessage}
            loadHeader = {loadHeader} 
            loadButtonText={loadButtonText}
            loadButtonLink = {loadButtonLink
                }/>    
          <Breadcrumb title="Contáctanos" />
          <section id="contact" className="contact-area ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-10 col-lg-6">
                  {/* Section Heading */}
                  <div className="section-heading">
                    <h2 className=" ">{contentDetails.ContactSectionContent.heading}</h2>
                    <p className="d-none d-sm-block mt-4">{contentDetails.ContactSectionContent.headingText}</p>
                    <p className="d-block d-sm-none mt-4">{contentDetails.ContactSectionContent.headingTexttwo}</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-12 col-md-5">
                  {/* Contact Us */}
                  <div className="contact-us">
                    <p className="mb-3">{contentDetails.ContactSectionContent.content}</p>
                    <ul>
                      {contentDetails.ContactSectionContent.iconList.map((item, idx) => {
                        return(
                          <li key={`ci_${idx}`} className="py-2">
                            <a className="media" href="/#">
                              <div className="social-icon mr-3">
                                <i className={item.iconClass} />
                              </div>
                              <span className="media-body align-self-center">{item.text}</span>
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
          {/*====== Map Area Start ======*/}
          <section className="section map-area">
            <iframe title="google-map" src="https://maps.google.com/maps?q=Secretar%C3%ADa%20de%20Servicios%20Institucionales%20&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{border: 0}} allowFullScreen width={100} height={100} />
          </section>
          {/*====== Map Area End ======*/}
          <FooterSection />
        </div>
      </div>
    );
}



export default ContactPage;
import React , {useEffect, useState} from 'react';
import Header from '../HeaderSection/Header';
import {  useContentState } from '../../context';

const ContactCompleted = () => {
  const contentDetails = useContentState();
  const [loadState, setLoadState] = useState(false);
  const [loadMessage, setLoadMessage] = useState('Creando tu espacio seguro ...')
  const [loadHeader, setLoadHeader] = useState('Cargando')
  const [loadButtonText, setLoadButtonText] = useState('')
  const [loadButtonLink, setLoadButtonLink] = useState('/login')
  return (
            <div className="homepage-2 download-page inner inner-pages">
                <div className="main">
                <Header 
                    imageData={"/img/logo-white.png"} 
                    setLoadState={setLoadState} 
                    loadState ={loadState}
                    loadMessage =  {loadMessage}
                    loadHeader = {loadHeader} 
                    loadButtonText={loadButtonText}
                    loadButtonLink = {loadButtonLink
                }/>                        <section id="home" className="section welcome-area bg-overlay h-100vh overflow-hidden">
                        <div className="container h-100">
                            <div className="row align-items-center h-100">
                                {/* Welcome Intro Start */}
                                <div className="col-12 col-md-7">
                                    <div className="welcome-intro">
                                        <h1 className="text-white">{contentDetails.ContactCompletedSection.heading}</h1>
                                        <p className="text-white mt-4">{contentDetails.ContactCompletedSection.content} <a href="/#" className="text-white text-underlined">{contentDetails.ContactCompletedSection.link}</a> {contentDetails.ContactCompletedSection.content_2}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-5">
                                    {/* Welcome Thumb */}
                                    <div className="welcome-thumb">
                                        <img src={contentDetails.ContactCompletedSection.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }


export default ContactCompleted;
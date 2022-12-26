import React , {useEffect, useState} from 'react';
import Header from '../HeaderSection/Header';
import {useContentState } from '../../context';

const EventSubscribe = props => {
  const contentDetails = useContentState();
  const [loadState, setLoadState] = useState(false);
  const [loadMessage, setLoadMessage] = useState('Creando tu espacio seguro ...')
  const [loadHeader, setLoadHeader] = useState('Cargando')
  const [loadButtonText, setLoadButtonText] = useState('')
  const [loadButtonLink, setLoadButtonLink] = useState('/login')
        return (
            <div className="homepage-3 inner inner-pages">
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
                    <section id="home" className="section welcome-area  bg-overlay h-100vh overflow-hidden">
                        <div className="container h-100">
                            <div className="row align-items-center justify-content-center h-100">
                            <div className="col-12 col-md-7">
                                <div className="welcome-intro text-center">
                                    <h1 className="text-white">{contentDetails.EventSectionContent.heading}</h1>
                                    <p className="text-white my-4">{contentDetails.EventSectionContent.content}</p>
                                    {/* Subscribe Form */}
                                    <div className="subscribe-form d-flex align-items-center mx-auto">
                                        <input type="email" className="form-control" placeholder="Enter your Email" />
                                        <button type="submit" className="btn btn-bordered">{contentDetails.EventSectionContent.btnText}</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
}

export default EventSubscribe;
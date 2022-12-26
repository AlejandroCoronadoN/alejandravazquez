import React , {useEffect, useState} from 'react';
import { useAuthDispatch } from '../../context';
import LoadingSection from '../Loading/LoadingOne';

const Header = ({
    setLoadState,
    loadState,
    loadHeader,
    loadMessage,
    loadButtonText,
    loadButtonLink
    }) => {
    const [isLoggedIn, setIsLoggedIn] = useState('');
    const dispatch = useAuthDispatch();
  
    const handleClose = () => {
        setLoadState(false);
    };

    useEffect(() => {
        setIsLoggedIn( localStorage.getItem('token'));
      }, [isLoggedIn]);
    
      useEffect(() => {
        console.log('EXECUTE: Header/setMessage: ',  loadMessage)
      }, [loadMessage]);




    //console.log('Header/localstorage: ', localStorage)
    return (
      <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
        <div className="container position-relative">
          <a className="navbar-brand" href="/">
            <img className="navbar-brand-regular logo-white"   src="/img/logo-white.png" alt="brand-logo" />
            <img className="navbar-brand-sticky logo-purple " src="/img/logo.png" alt="sticky brand-logo" />
          </a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="navbar-inner ">
            {/*  Mobile Menu Toggler */}
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <nav>
              <ul className="navbar-nav menu-font" id="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link " href="/">Inicio</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/Photography">Photography</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/Blogings">Blogings</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/pricing">CV</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/contact">Resume</a>
                </li>
              </ul>
            </nav>
          </div>
          <LoadingSection 
            loadState = {loadState}
            handleClose={handleClose}
            loadHeader = {loadHeader}
            loadMessage = {loadMessage}
            loadButtonText = {loadButtonText}
            loadButtonLink ={loadButtonLink}
            />

        </div>
    </header>
    );
  
}

export default Header;
import React , {useEffect, useState} from 'react';
import Header from '../components/HeaderSection/Header';
import HeadSection from '../components/HeadSection/HeadSection';
//import Counter from '../components/CounterSection/Counter';
import FeaturesImages from '../components/Features/FeaturesImages';
import InfoTextImageOne from '../components/InfoSection/InfoTextImageOne';
import InfoImageTextOne from '../components/InfoSection/InfoImageTextOne';

import InfoTextImageTwo from '../components/InfoSection/InfoTextImageTwo';
import InfoImageTextTwo from '../components/InfoSection/InfoImageTextTwo';

import InfoTextImageThree from '../components/InfoSection/InfoTextImageThree';
import InfoImageTextThree from '../components/InfoSection/InfoImageTextThree';

//import InfoImageTextFour from '../components/InfoSection/InfoImageTextFour';
import InfoTextImageFour from '../components/InfoSection/InfoTextImageFour';

//import ScreenshotSection from '../components/ScreenshotSection/ScreenshotsOne';
import BrandbannerSection from '../components/BrandbannerSection/BrandbannerOne';

// import FaqSection from '../components/FaqSection/FaqTwo';
//import Subscribe from '../components/SubscribeSection/Subscribe';
import ContactInfo from '../components/ContactSection/ContactInfo';
import FooterSection from '../components/FooterSection/FooterLeft';

function MainSection(props){
 const [loadState, setLoadState] = useState(false);
 const [loadMessage, setLoadMessage] = useState('Creando tu espacio seguro ...')
 const [loadHeader, setLoadHeader] = useState('Cargando')
 const [loadButtonText, setLoadButtonText] = useState('')
 const [loadButtonLink, setLoadButtonLink] = useState('/login')

  return (
      <div>
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
                    loadButtonLink = {loadButtonLink}/>
              <HeadSection />
              <FeaturesImages />

              <BrandbannerSection/>

              <InfoTextImageOne />
              <InfoImageTextOne />

              <InfoTextImageTwo />
              <InfoImageTextTwo />

              <InfoTextImageThree />
              <InfoImageTextThree />

              <InfoTextImageFour />

              <ContactInfo />
              <FooterSection />
          </div>
      </div>
  );

}

export default MainSection;
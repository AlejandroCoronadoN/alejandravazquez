import React, {  useState, useEffect } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from './Breadcrumb';
import PhotoSummary from './PhotoSummary';
import FooterSection from '../FooterSection/FooterCenter';
import { getPhotosInfo, useAuthDispatch } from '../../context';

const PhotosIndex = props =>  {
        const [photosData, setPhotosData] = useState(false);
        const dispatch = useAuthDispatch();
    
        useEffect(() => {
            // Update the document title using the browser API
            const data = async() =>{
                try { 
                    const  response = await getPhotosInfo(dispatch);
                    console.log('PhotosIndex-> getPhotosInfo/ response' ,response.docs);
                    setPhotosData(response.docs);
                    console.log('PhotosIndex-> getPhotosInfo/photosData ' ,photosData);
                    return response
                } catch (error) {
                    console.log('Error: PhotosIndex-> pyschologystsData ' ,error);
                }
            } 
            const response  = data();
          },[]);
      
        return (
            <div className="blog">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <Breadcrumb title="Blog - 3 Column" />
                    <section id="blog" className="section blog-area ptb_100">
                        <div className="container">
                            {photosData ?
                                <PhotoSummary 
                                setPhotosData={setPhotosData} 
                                photosData={photosData} />
                            :   null
                            }

                        </div>
                    </section>
                    <FooterSection />
                </div>
            </div>
        );
}

export default PhotosIndex;
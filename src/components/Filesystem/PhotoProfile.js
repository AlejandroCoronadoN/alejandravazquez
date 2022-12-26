import React , {useEffect, useState} from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from './Breadcrumb';
import PhotoDetails from './PhotoDetails';
import FooterSection from '../FooterSection/FooterCenter';
import {useContentState } from '../../context';
import { useParams } from 'react-router-dom';
import { getPhotoInfo, useAuthDispatch } from '../../context';

const PhotoProfile = props => {
    const contentDetails = useContentState();
    const [loadState, setLoadState] = useState(false);
    const [loadMessage, setLoadMessage] = useState('Creando tu espacio seguro ...')
    const [loadHeader, setLoadHeader] = useState('Cargando')
    const [loadButtonText, setLoadButtonText] = useState('')
    const [loadButtonLink, setLoadButtonLink] = useState('/login')

    let { photoPath } = useParams();
    const [blogData, setBlogData] = useState(false);
    const dispatch = useAuthDispatch();

    useEffect(() => {
        // Update the document title using the browser API
        const data = async() =>{
            try { 
                console.log('PhotoProfile-> getPhotoInfo/ photoPath' ,photoPath);
                const  response = await getPhotoInfo(dispatch, {photoPath});
                console.log('PhotoProfile-> getPhotoInfo/ response: ' ,response.docs);
                setBlogData(response.docs);
                return response
            } catch (error) {
                console.log('Error: PhotoProfile-> blogData ' ,error);
            }
        } 
        const response  = data();
      },[]);
      
    console.log('photoPath:', photoPath)
        return (
            <div className="blog blog-right">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <Breadcrumb title="Blog Details - Right Sidebar" />
                    <section id="blog" className="section blog-area ptb_100">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-12">
                                    {blogData ?
                                        <PhotoDetails 
                                            setBlogData={setBlogData} 
                                            blogData={blogData} 
                                        />
                                        :   
                                        null
                                        }                                
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterSection />
                </div>
            </div>
        );
    }
export default PhotoProfile;
import React , {useEffect, useState} from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from './Breadcrumb';
import BlogDetails from './BlogDetails';
import FooterSection from '../FooterSection/FooterCenter';
import {useContentState } from '../../context';
import { useParams } from 'react-router-dom';
import { getBlogInfo, useAuthDispatch } from '../../context';

const BlogsProfile = props => {
    const contentDetails = useContentState();
    const [loadState, setLoadState] = useState(false);
    const [loadMessage, setLoadMessage] = useState('Creando tu espacio seguro ...')
    const [loadHeader, setLoadHeader] =  useState('Cargando')
    const [loadButtonText, setLoadButtonText] = useState('test')
    const [loadButtonLink, setLoadButtonLink] = useState('/login')

    let {blogPath} = useParams();
    const [blogData, setBlogData] = useState(false);
    const dispatch = useAuthDispatch();

    useEffect(() => {
        // Update the document title using the browser API
        const data = async() =>{
            try { 
                console.log('BlogsProfile-> getBlogInfo/BlogPath' ,blogPath);
                const  response = await getBlogInfo(dispatch, {blogPath});
                console.log('BlogsProfile-> getBlogInfo/response: ' ,response.docs);
                setBlogData(response.docs);
                return response
            } catch (error) {
                console.log('Error: BlogsProfile-> blogData ' ,error);
            }
        } 
        const response  = data();
      },[]);
      
    console.log('BlogPath:', blogPath)
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
                                        <BlogDetails 
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
export default BlogsProfile;
import React, {  useState, useEffect } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from './Breadcrumb';
import BlogsSummary from './BlogsSummary';
import FooterSection from '../FooterSection/FooterCenter';
import { getBlogsInfo, useAuthDispatch } from '../../context';

const BlogsIndex = props =>  {
        const [blogsData, setBlogsData] = useState(false);
        const dispatch = useAuthDispatch();
    
        useEffect(() => {
            // Update the document title using the browser API
            const data = async() =>{
                try { 
                    const  response = await getBlogsInfo(dispatch);
                    console.log('BlogsIndex-> getBlogsInfo/ response' ,response.docs);
                    setBlogsData(response.docs);
                    console.log('BlogsIndex-> getBlogsInfo/blogsData ' ,blogsData);
                    return response
                } catch (error) {
                    console.log('Error: BlogsIndex-> pyschologystsData ' ,error);
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
                            {blogsData ?
                                <BlogsSummary 
                                setBlogsData={setBlogsData} 
                                blogsData={blogsData} />
                            :   null
                            }

                        </div>
                    </section>
                    <FooterSection />
                </div>
            </div>
        );
}

export default BlogsIndex;
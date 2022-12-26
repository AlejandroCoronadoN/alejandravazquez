import React , {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

const BlogsSummary = ({
    setBlogsData,
    blogsData
    } )=> {
        console.log('---------BlogsSummary/blogsData.data(): ', blogsData);
        const [isLoaded, setLoaded] = useState(false);
        const history = useHistory();

        useEffect(() => {
            setLoaded( blogsData);
          }, [isLoaded]);

        const redirectElement = (psychPath) =>{
            const route_path = '/blogs/' + psychPath;
            history.push(route_path);
        }

        return (
            <div>
                <div className="row">
                    {blogsData.map((item, idx) => {
                        return(
                            <div key={`bth_${idx}`} className="col-12 col-md-6 col-lg-4">
                                {/* Single Blog */}
                                
                                <div  onClick= {() => redirectElement((item.data().blogPath))} className="single-blog res-margin">
                                    {/* Blog Thumb */}
                                    <div className="blog-thumb">
                                        <a ><img src={item.data().imgcover} alt="" /></a>
                                    </div>
                                    {/* Blog Content */}
                                    <div className="blog-content p-4">
                                        {/* Meta Info */}
                                        <ul className="meta-info d-flex justify-content-between">
                                            <li>Autora: <a className="text-primary">{item.data().authorName} {item.data().authorLastname}</a></li>
                                            <li><a >{item.data().text_2}</a></li>
                                        </ul>
                                        {/* Blog Title */}
                                        <h3 className="blog-title my-3"><a >{item.data().title}</a></h3>
                                        <p>{item.data().abstract}</p>
                                        <a href={item.data().blogPath} className="blog-btn mt-3">Leer artículo</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Pagination */}
                        <ul className="pagination justify-content-center py-4">
                            <li className="disabled px-1">
                                <a href="/#" aria-label="Previous">
                                <i className="fas fa-arrow-left" />
                                </a>
                            </li>
                            <li className="px-1"><a href="/#">1</a></li>
                            <li className="active px-1"><a href="/#">2</a></li>
                            <li className="px-1"><a href="/#">3</a></li>
                            <li>
                                <a href="/#" aria-label="Next">
                                <i className="fas fa-arrow-right" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
}

export default BlogsSummary;
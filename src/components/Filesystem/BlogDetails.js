import React , {useEffect, useState} from 'react';

const BlogDetails = ({
    setBlogData,
    blogData
    } )=> {

        const [isLoaded, setLoaded] = useState(false);
        useEffect(() => {
            setLoaded( blogData);
          }, [isLoaded]);
    
        return (
            <div>
                {/* Single Blog Details */}
                <article className="single-blog-details">
                    {/* Blog Thumb */}
                    <div className="blog-thumb">
                        <a href="/#"><img src={blogData[0].data().imgcover} alt="" /></a>
                    </div>
                    {/* Blog Content */}
                    <div className="blog-content sApp-blog">
                        {/* Meta Info */}
                        <div className="meta-info d-flex flex-wrap align-items-center py-2">
                            <ul>
                                <li className="d-inline-block p-2">Autor/Autoras <a className="text-primary" href="/#">{blogData[0].data().authorName} {blogData[0].data().authorLastname}</a></li>
                                <li className="d-inline-block p-2"><a className="text-primary" href="/#">{blogData[0].data().coauthorName} {blogData[0].data().coauthorLastname}</a></li>
                            </ul>
                            {/* Blog Share //TODO:  Esta funcionalidad es buena deberiamos seguir desarrollando*/}
                            <div className="blog-share ml-auto d-none d-sm-block">
                                {/* Social Icons 
                                <div className="social-icons d-flex justify-content-center">
                                    {blogData[0].data().iconlist.map((item, idx) => {
                                        return(
                                            <a key={`bdi_${idx}`} className={item.link} href="/#">
                                                <i className={item.iconClass} />
                                                <i className={item.iconClass} />
                                            </a>
                                        );
                                    })}
                                </div>
                            */}
                            </div>
                        </div>
                        {/* Blog Details */}
                        <div className="blog-details margin50">
                            <h3 className="blog-title py-3"><a href="/#">{blogData[0].data().title}</a></h3>
                        </div>

                        {blogData[0].data().img1 ?
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-7">
                                            <div className="blog-details margin50">
                                                <h5 className="admin-name mb-2"><a href="/#">{blogData[0].data().subtitle1}</a></h5>
                                                <p className="d-none d-sm-block justify">{blogData[0].data().content1}</p>
                                            </div>
                                        </div>

                                    <div className="col-12 col-lg-5">
                                        <div className="blog-thumb margin100">
                                                <a href="/#"><img src={blogData[0].data().img} alt="" /></a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                                    :   
                            <div className="blog-details margin50">
                                <h5 className="admin-name mb-2"><a href="/#">{blogData[0].data().subtitle1}</a></h5>
                                <p className="d-none d-sm-block justify">{blogData[0].data().content1}</p>
                            </div>
                         }       

                        {/*Segunda parrte del blog */}
                        {blogData[0].data().img2 ?
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-5">
                                    <div className="blog-thumb margin100">
                                        <a href="/#"><img src={blogData[0].data().img} alt="" /></a>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-7">
                                    <div className="blog-details margin50">
                                        <h5 className="admin-name mb-2"><a href="/#">{blogData[0].data().subtitle2}</a></h5>
                                        <p className="d-none d-sm-block justify">{blogData[0].data().content2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                :   
                        <div className="blog-details margin50">
                            <h5 className="admin-name mb-2"><a href="/#">{blogData[0].data().subtitle2}</a></h5>
                            <p className="d-none d-sm-block justify">{blogData[0].data().content2}</p>
                        </div>
                        }       

                        {blogData[0].data().img3 ?
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-7">
                                            <div className="blog-details margin50">
                                                <h5 className="admin-name mb-2"><a href="/#">{blogData[0].data().subtitle3}</a></h5>
                                                <p className="d-none d-sm-block justify">{blogData[0].data().content3}</p>
                                            </div>
                                        </div>

                                    <div className="col-12 col-lg-5">
                                        <div className="blog-thumb margin100">
                                                <a href="/#"><img src={blogData[0].data().img} alt="" /></a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                                    :   
                            <div className="blog-details margin50">
                                <h5 className="admin-name mb-2"><a href="/#">{blogData[0].data().subtitle3}</a></h5>
                                <p className="d-none d-sm-block justify">{blogData[0].data().content3}</p>
                            </div>
                         }       


                    </div>


                    {/* Blog Comments 
                    <div className="blog-comments">
                        <div className="admin media py-4 mt-4">
                            <div className="admin-thumb avatar-lg">
                                <img className="rounded-circle" src={blogData[0].data().img} alt="" />
                            </div>
                            <div className="admin-content media-body pl-3 pl-sm-4">
                                <h4 className="admin-name mb-2"><a href="/#">admin text</a></h4>
                                <p>admin more text</p>
                            </div>
                        </div>
                        <div className="comments my-5">
                            <h3 className="comments-title text-uppercase text-primary text-right mb-3">{blogData[0].data().commentsTitle}</h3>
                            {blogData[0].data().commentsData.map((item, idx) => {
                                return(
                                    <div key={`bdc_${idx}`} className="single-comments media p-3 p-lg-4">
                                        <div className="comments-thumb avatar-lg">
                                        <img className="rounded-circle" src={item.commentsImage} alt="" />
                                        </div>
                                        <div className="comments-content media-body pl-3">
                                        <h5 className="d-flex mb-2">
                                            <a href="/#">{item.commentsAuthor}</a>
                                            <a href="/#" className="ml-auto">{item.replyText}</a>
                                        </h5>
                                        <p className="d-none d-lg-block">{item.commentsText_1}</p>
                                        <p className="d-block d-lg-none">{item.commentsText_2}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                            */}



                </article>
            </div>
        );
}

export default BlogDetails;
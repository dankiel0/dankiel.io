import React from 'react';

import blogimg from './img/blog-post-thumb-card-1.jpg';

export default class Blog extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center">
                        <h2 className="heading">A Blog About Software Development And Life</h2>
                    </div>
                </section>
                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="card blog-post-card">
                                    <img className="card-img-top" src={blogimg}
                                         alt="image"/>
                                        <div className="card-body">
                                            <h5 className="card-title"><a className="theme-link" href="blog-post.html">Top
                                                3 JavaScript Frameworks</a></h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                                penatibus et magnis dis parturient...</p>
                                            <p className="mb-0"><a className="text-link" href="blog-post.html">Read more
                                                →</a></p>

                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Published 2 days ago</small>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card blog-post-card">
                                    <img className="card-img-top" src={blogimg}
                                         alt="image"/>
                                        <div className="card-body">
                                            <h5 className="card-title"><a className="theme-link" href="blog-post.html">About
                                                Remote Working</a></h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                                penatibus et magnis dis parturient...</p>
                                            <p className="mb-0"><a className="text-link" href="blog-post.html">Read more
                                                →</a></p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Published a week ago</small>

                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card blog-post-card">
                                    <img className="card-img-top" src={blogimg}
                                         alt="image"/>
                                        <div className="card-body">
                                            <h5 className="card-title"><a className="theme-link" href="blog-post.html">A
                                                Guide to Becoming a Full-Stack Developer</a></h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                                penatibus et magnis dis parturient...</p>
                                            <p className="mb-0"><a className="text-link" href="blog-post.html">Read more
                                                →</a></p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Published 3 weeks ago</small>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card blog-post-card">
                                    <img className="card-img-top" src={blogimg}
                                         alt="image"/>
                                        <div className="card-body">
                                            <h5 className="card-title"><a className="theme-link" href="blog-post.html">High
                                                Performance JavaScript</a></h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                                penatibus et magnis dis parturient...</p>
                                            <p className="mb-0"><a className="text-link" href="blog-post.html">Read more
                                                →</a></p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Published 1 month ago</small>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card blog-post-card">
                                    <img className="card-img-top" src={blogimg}
                                         alt="image"/>
                                        <div className="card-body">
                                            <h5 className="card-title"><a className="theme-link" href="blog-post.html">Learn
                                                React in 24 Hours</a></h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                                penatibus et magnis dis parturient...</p>
                                            <p className="mb-0"><a className="text-link" href="blog-post.html">Read more
                                                →</a></p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Published 1 month ago</small>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card blog-post-card">
                                    <img className="card-img-top" src={blogimg}
                                         alt="image"/>
                                        <div className="card-body">
                                            <h5 className="card-title"><a className="theme-link" href="blog-post.html">How
                                                to Build Desktop Apps with HTML, CSS and JavaScript</a></h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                                penatibus et magnis dis parturient...</p>
                                            <p className="mb-0"><a className="text-link" href="blog-post.html">Read more
                                                →</a></p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Published 2 months ago</small>
                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

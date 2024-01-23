import React from 'react';

import projectimg from './img/photo-1515879218367-8466d910aaa4.jpg'

export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center single-col-max-width">
                        <h2 className="heading">Portfolio</h2>
                        <div className="intro">
                            <p>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some
                                help building your software?</p>

                        </div>
                    </div>
                </section>
                <section className="projects-list px-3 py-5 p-md-5">
                    <div className="container">
                        <div className="project-cards row isotope">
                            <div className="isotope-item col-md-6 mb-5 mobileapp frontend">
                                <div className="card project-card">
                                    <div className="row">
                                        <div className="col-12 col-xl-5 card-img-holder">
                                            <img src={projectimg} className="card-img"
                                                 alt="image"/>
                                        </div>
                                        <div className="col-12 col-xl-7">
                                            <div className="card-body">
                                                <h5 className="card-title"><a href="project.html"
                                                                              className="theme-link">Project Heading</a>
                                                </h5>
                                                <p className="card-text">Project intro lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis
                                                    dis parturient montes.</p>
                                                <p className="card-text"><small className="text-muted">Client:
                                                    Google</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="isotope-item col-md-6 mb-5 webapp frontend">
                                <div className="card project-card">
                                    <div className="row">
                                        <div className="col-12 col-xl-5 card-img-holder">
                                            <img src={projectimg} className="card-img"
                                                 alt="image"/>
                                        </div>
                                        <div className="col-12 col-xl-7">
                                            <div className="card-body">
                                                <h5 className="card-title"><a href="project.html"
                                                                              className="theme-link">Project Heading</a>
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus. </p>
                                                <p className="card-text"><small className="text-muted">Client:
                                                    Dropbox</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="isotope-item col-md-6 mb-5 mobileapp">
                                <div className="card project-card">
                                    <div className="row">
                                        <div className="col-12 col-xl-5 card-img-holder">
                                            <img src={projectimg} className="card-img"
                                                 alt="image"/>
                                        </div>
                                        <div className="col-12 col-xl-7">
                                            <div className="card-body">
                                                <h5 className="card-title"><a href="project.html"
                                                                              className="theme-link">Project Heading</a>
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus. </p>
                                                <p className="card-text"><small className="text-muted">Client:
                                                    Google</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="isotope-item col-md-6 mb-5 webapp backend">
                                <div className="card project-card">
                                    <div className="row">
                                        <div className="col-12 col-xl-5 card-img-holder">
                                            <img src={projectimg} className="card-img"
                                                 alt="image"/>
                                        </div>
                                        <div className="col-12 col-xl-7">
                                            <div className="card-body">
                                                <h5 className="card-title"><a href="project.html"
                                                                              className="theme-link">Project Heading</a>
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus. </p>
                                                <p className="card-text"><small className="text-muted">Client: Startup
                                                    Hub</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="isotope-item col-md-6 mb-5 mobileapp frontend">
                                <div className="card project-card">
                                    <div className="row">
                                        <div className="col-12 col-xl-5 card-img-holder">
                                            <img src={projectimg} className="card-img"
                                                 alt="image"/>
                                        </div>
                                        <div className="col-12 col-xl-7">
                                            <div className="card-body">
                                                <h5 className="card-title"><a href="project.html"
                                                                              className="theme-link">Project Heading</a>
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus. </p>
                                                <p className="card-text"><small className="text-muted">Client:
                                                    SalesForce</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="isotope-item col-md-6 mb-5 webapp backend">
                                <div className="card project-card">
                                    <div className="row">
                                        <div className="col-12 col-xl-5 card-img-holder">
                                            <img src={projectimg} className="card-img"
                                                 alt="image"/>
                                        </div>
                                        <div className="col-12 col-xl-7">
                                            <div className="card-body">
                                                <h5 className="card-title"><a href="project.html"
                                                                              className="theme-link">Project Heading</a>
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus. </p>
                                                <p className="card-text"><small className="text-muted">Client:
                                                    Uber</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
                                <div className="card project-card">
                                    <div className="row">
                                        <div className="col-12 col-xl-5 card-img-holder">
                                            <img src={projectimg} className="card-img"
                                                 alt="image"/>
                                        </div>
                                        <div className="col-12 col-xl-7">
                                            <div className="card-body">
                                                <h5 className="card-title"><a href="project.html"
                                                                              className="theme-link">Project Heading</a>
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus. </p>
                                                <p className="card-text"><small className="text-muted">Client:
                                                    Lyft</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="isotope-item col-md-6 mb-5 webapp frontend">
                                <div className="card project-card">
                                    <div className="row">
                                        <div className="col-12 col-xl-5 card-img-holder">
                                            <img src={projectimg} className="card-img"
                                                 alt="image"/>
                                        </div>
                                        <div className="col-12 col-xl-7">
                                            <div className="card-body">
                                                <h5 className="card-title"><a href="project.html"
                                                                              className="theme-link">Project Heading</a>
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus. </p>
                                                <p className="card-text"><small className="text-muted">Client:
                                                    GitLab</small></p>
                                            </div>
                                        </div>
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

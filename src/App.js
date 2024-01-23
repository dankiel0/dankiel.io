import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import NavBar from './NavBar.js';

import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';
import Blog from './Blog.js';
import Resume from './Resume.js';
import Contact from './Contact.js';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/aboutme" element={<AboutMe />}/>
                    <Route path="/resume" element={<Resume />}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/portfolio" element={<Portfolio />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/" element={<AboutMe />}/>
                </Routes>
            </Router>
        )
    }
}

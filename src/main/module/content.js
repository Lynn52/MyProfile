import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './content.css';
import Home from '../menu/home';
import AboutMe from '../menu/aboutme';
import Portfolio from '../menu/portfolio';
import Contact from '../menu/contact';

function Content() {
    return (
        <div className='content_area'>
            <div className='section_content'>
                <Routes>
                    <Route path='*' element={<Home />}/>
                    <Route path='/aboutme' element={<AboutMe />}/>
                    <Route path='/portfolio' element={<Portfolio />}/>
                    <Route path='/contact' element={<Contact />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Content;
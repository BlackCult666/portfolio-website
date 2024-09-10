import * as React from 'react'

import { useState } from 'react';
import { Link } from 'gatsby';

import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

import "../css/navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="navigation-placeholder"></div>
            <div className="navigation-bar">
                <nav>
                    <Link to="/" className="nav-logo">Lorem Ipsum</Link>
                    <div onClick={toggleNav} className="nav-menu">
                        {!isOpen ? (
                            <IoMenuOutline className="react-icons" id="hamburger" />
                        ) : (
                            <IoCloseOutline className="react-icons" id="close" />
                        )}
                        <span>Menu</span>
                    </div>
                </nav>
            </div>
            
            <div className="overlay" style={{ width: isOpen ? '100%' : '0%' }}>
                <div className="overlay-bg"></div>

                <div className="overlay-content">
                    <div className="overlay-section overlay-projects">
                        <span className="overlay-span">Projects</span>
                        <a href="#" onClick={toggleNav}>Portfolio</a>
                    </div>
                    <div className="overlay-section">
                        <span className="overlay-span">Sections</span>
                        <Link to="/about" onClick={toggleNav}>About me</Link>
                        <Link to="/about" onClick={toggleNav}>Curriculum</Link>
                        <Link to="/about" onClick={toggleNav}>Recordings</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import * as React from 'react'

import { FaLocationDot } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";

import "../css/hero.css"

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-inner-grid">
                <div className="hero-title-wrapper">
                    <h1 className="hero-headline">Exploring Economics and Finance while dedicating time to guitar and musical growth.</h1>
                </div>
            </div>

            <div className="hero-inner-grid">
                <div className="details-list">
                    <div className="detail-item">
                        <div className="detail-icon"><IoBagHandleOutline className="detail-react-icon"/></div>
                        <span className="detail-span">Student at Federico II</span>
                    </div>

                    <div className="detail-item">
                        <div className="detail-icon"><FaLocationDot className="detail-react-icon" /></div>
                        <span className="detail-span">Province of Naples -{'>'} Italy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
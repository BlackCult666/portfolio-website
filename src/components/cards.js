import * as React from 'react'

import "../css/cards.css"

const Cards = () => {
    return (
        <div className="card-grid">
            <div className="card" id="first-card">
                <div className="mockup-image"></div>
            </div>
            <div className="double-card">
                <div className="card" id="second-card"></div>
                <div className="card" id="third-card"></div>
            </div>
            
            <div className="card" id="fourth-card"></div>
            <div className="card" id="fifth-card"></div>
        </div>
    )
}

export default Cards
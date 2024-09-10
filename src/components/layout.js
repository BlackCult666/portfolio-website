import * as React from 'react'
import "../css/layout.css"
import "../css/colors.css"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Navbar />

            {children}

            <Footer />
        </div>
    )
}

export default Layout
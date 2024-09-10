import * as React from "react"

import "../css/footer.css"

const Footer = () => {
    return (
        <footer>
            <span>View the code of this portfolio on <a href="https://github.com/BlackCult666/blackcult666.github.io">Github</a>.</span>

            <ul className="social-list">
                <li><a href="#">Telegram</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Github</a></li>
            </ul>
        </footer>
    )
}

export default Footer
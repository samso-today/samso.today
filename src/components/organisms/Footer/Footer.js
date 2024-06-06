import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <ul className="external-links">
                <li><a href="https://www.instagram.com/samso.today/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a></li>
                <li><a href="https://www.linkedin.com/in/samso-today/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a></li>
                <li><a href="https://github.com/samso-today/">
                    <FontAwesomeIcon icon={faGithub} />
                </a></li>
            </ul>
            <p className="copyright">©SAMSO.</p>
        </footer>
    )
}
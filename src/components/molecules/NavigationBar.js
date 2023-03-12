import * as React from 'react'
import { Link } from 'gatsby'
import "./NavigationBar.css"

const NavigationBar = () => {
    return (
        <nav>
            <ul className="navigation">
                <li><Link to="/about" className="nav-text">About</Link></li>
                <li><Link to="/posts" className="nav-text">Posts</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar
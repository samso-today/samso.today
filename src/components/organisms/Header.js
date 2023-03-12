import * as React from 'react'
import { Link } from 'gatsby'

import NavigationBar from '../molecules/NavigationBar'

const Header = () => {
    const title = "SAMSO.TODAY";

    return (
        <header>
            <h3 className="title">
                <Link to="/">
                    {title}
                </Link>
            </h3>
            <NavigationBar />
        </header>
    )
}

export default Header;
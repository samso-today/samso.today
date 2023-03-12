import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import NavigationBar from '../molecules/NavigationBar'

export default function Header() {
    const titleData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <header>
            <h3 className="title">
                <Link to="/">
                    {titleData.site.siteMetadata.title}
                </Link>
            </h3>
            <NavigationBar />
        </header>
    )
}
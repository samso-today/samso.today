import * as React from 'react'
import { Link } from 'gatsby'

import NavigationBar from '../../molecules/NavigationBar'
import './Header.css'
import TitleLogo from "./TitleLogo.png"

export default function Header() {
  return (
    <header>
      <div className="title">
        <Link to="/">
          <img className="titleLogo" src={TitleLogo} alt="Sam So Today Logo"></img>
        </Link>
      </div>
      <NavigationBar />
    </header>
  )
}

/*
  const titleData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
{titleData.site.siteMetadata.title}
*/
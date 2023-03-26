import * as React from "react"
import { graphql } from "gatsby";

import Main from "../components/templates/Main/Main"

export default function MainPage({ data }) {
  let propSiteMetadata = data.site?.siteMetadata;

  return (
    <Main siteMetadata={propSiteMetadata} />
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        image
        siteUrl
        title
      }
    }
  }
`

import * as React from "react"
import { graphql } from 'gatsby'

import Post from "../../components/templates/Post/Post"

export default function Layout({ data }) {
  return (
    <Post data={data} />
  )
}

export const query = graphql`
  query PostQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subTitle
        date(formatString: "YYYY-MM-DD")
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.markdownRemark.frontmatter.title}</title>

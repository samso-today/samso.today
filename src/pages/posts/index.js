import * as React from "react"
import { graphql } from "gatsby"

import PostLists from "../../components/templates/PostLists/PostLists"

export default function PostListsPage({ data }) {
  return (
    < PostLists data={data} />
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/posts/"}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        frontmatter {
          title
          subTitle
          slug
          date(formatString: "YYYY-MM-DD")
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`

export const Head = () => <title>Posts</title>

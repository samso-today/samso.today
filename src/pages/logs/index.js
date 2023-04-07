import * as React from "react"
import { graphql } from "gatsby"

import LogList from "../../components/templates/LogList/LogList"

export default function logListPage({ data }) {
    return (
        < LogList data={data} />
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/logs/"}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYYMMDD")
          videoLink
        }
        html
      }
    }
  }
`

export const Head = () => <title>Logs</title>

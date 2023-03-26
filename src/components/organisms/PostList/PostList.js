import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import "./PostList.css"

export default function PostList({ data }) {
    let thumbnail = getImage(data.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);

    return (
        <div className="post-list">
            <Link to={`/posts/${data.frontmatter.slug}`}>
                <div class="thumbnail">
                    <GatsbyImage image={thumbnail} style={{ height: "100%", width: "100%", objectFit: "cover", WebkitTransform: "scale(1)", WebkitTransition: "all .3s ease-in-out" }} />
                </div>

                <div>
                    <h1>{data.frontmatter?.title}</h1>
                    <h2>{data.frontmatter?.subTitle}</h2>
                    <h4>{data.frontmatter?.date}</h4>
                </div>
            </Link >
        </div >
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
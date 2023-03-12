import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Header from "../organisms/Header"
import Footer from "../organisms/Footer"

export default function Post({ data }) {
    let post = data.markdownRemark;
    let thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)

    return (
        <div>
            <Header />
            <main>
                post_template_is_coming
                <h1>{post.frontmatter.title}</h1>
                <GatsbyImage image={thumbnail} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </main>
            <Footer />
        </div>
    )
}

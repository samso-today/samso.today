import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Header from "../../organisms/Header/Header"
import Footer from "../../organisms/Footer/Footer"
import "./Post.css"

export default function Post({ data }) {
    let post = data.markdownRemark;
    let thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)

    return (
        <div class="post">
            <Header />
            <main>
                <div class="thumbnail">
                    <GatsbyImage image={thumbnail} style={{ height: "100%", width: "100%", objectFit: "cover", WebkitTransform: "scale(1)", WebkitTransition: "all .3s ease-in-out" }} />
                </div>

                <div className="main-wrapper">
                    <h1>{post.frontmatter.title}</h1>
                    <h2>{post.frontmatter.subTitle}</h2>
                    <h3>{post.frontmatter.date}</h3>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>

            </main>
            <Footer />
        </div >
    )
}

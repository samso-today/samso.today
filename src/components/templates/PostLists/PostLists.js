import * as React from "react"

import Header from "../../organisms/Header/Header"
import Footer from "../../organisms/Footer/Footer"
import PostList from "../../organisms/PostList/PostList"
import "./PostLists.css"

export default function PostLists({ data }) {
    let postLists = data.allMarkdownRemark?.nodes;

    return (
        <div class="post-lists">
            <Header />
            <main>
                <div class="main-wrapper">
                    {postLists.map((dataElem, index) => {
                        return <PostList data={dataElem} />
                    })}
                </div>
            </main>
            <Footer />
        </div >
    )
}

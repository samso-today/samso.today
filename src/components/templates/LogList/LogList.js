import * as React from "react"

import Header from "../../organisms/Header/Header"
import Footer from "../../organisms/Footer/Footer"
import Log from "../../organisms/Log/Log"
import "./LogList.css"

export default function LogList({ data }) {
    let logList = data.allMarkdownRemark?.nodes;

    return (
        <div class="log-list">
            <Header />
            <main>
                <div class="main-wrapper">
                    {logList.map((dataElem, index) => {
                        return <Log data={dataElem} />
                    })}
                </div>
            </main>
            <Footer />
        </div >
    )
}

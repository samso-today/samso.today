import * as React from "react"

import Header from "../organisms/Header"
import Footer from "../organisms/Footer"

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                Making a blog from 0 to 1 is not that easy as I thought
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
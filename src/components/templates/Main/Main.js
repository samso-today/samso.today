import * as React from "react"
import { Helmet } from "react-helmet"

import Header from "../../organisms/Header/Header"
import Footer from "../../organisms/Footer/Footer"
import TwoColumns from "../../organisms/TwoColumns/TwoColumns"

import "./Main.css"
import SamSoProfile from "./samso-profile.jpg"

export default function Main({ siteMetadata }) {
    return (
        <div class="landing">
            <Helmet>
                <title>{siteMetadata.title}</title>

                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={siteMetadata.title} />
                <meta property="og:description" content={siteMetadata.description} />
                <meta property="og:image" content={siteMetadata.image} />
                <meta property="og:url" content={siteMetadata.siteUrl} />
                <meta property="og:site_name" content={siteMetadata.title} />
            </Helmet>
            <Header />
            <main>
                <div class="main-wrapper">
                    <TwoColumns
                        leftContext={<img src={SamSoProfile} alt="Sam So Profile" width="100%" />}
                        rightContext={<h2>I'm Sam,<br/>a versatile engineer<br/>with a people-oriented mindset<br/>and a keen eye for detail.</h2>
                    }
                    />

                </div>
            </main>
            <Footer />
        </div >
    )
}

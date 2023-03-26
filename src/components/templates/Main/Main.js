import * as React from "react"

import Header from "../../organisms/Header/Header"
import Footer from "../../organisms/Footer/Footer"
import TwoColumns from "../../organisms/TwoColumns/TwoColumns"
import "./Main.css"
import SamSoProfile from "./samso-profile.jpg"

export default function Main() {
    return (
        <div class="landing">
            <Header />
            <main>
                <div class="main-wrapper">
                    <TwoColumns
                        leftContext={<img src={SamSoProfile} alt="Sam So Profile" width="100%" />}
                    />

                    <h1>화룡점정.</h1>
                    <p>용을 그릴 때 마지막으로 눈동자를 그린다는 뜻으로,<br />커다란 골조를 시작으로 세부적인 부분까지 신경쓴 창작물만이 후대에 기억될 수 있습니다.</p>
                    <p>프로젝트 또한 빠른 속도만큼 태스크의 완성도가 중요합니다. <br />디테일을 바라보는 능력과 다양한 분야에 대한 경험을 기반으로,<br />위대한 개척자들이 한발짝 나아갈 때 무너지지 않는<br />튼튼한 기반을 만들어나가는 역할을 맡고 있습니다.</p>
                </div>
            </main>
            <Footer />
        </div >
    )
}

/*
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/k36cEbuLG94?start=24&autoplay=1&mute=1" title="Youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <h1>안녕하세요, <br />데이터 엔지니어 소형석입니다.</h1>
                    */
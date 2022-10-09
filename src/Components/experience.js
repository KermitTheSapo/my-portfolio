import React from "react"
import * as S from "../styles/experienceStyle.js"
import Compass from "../assets/imgs/experiences/compass.png"
import Footer from "../Components/footer.js"
export default function Experience(){
    return(
        <S.Section>
            <h1>Experience</h1>
            <S.ExperienceDiv>
                <div>
                    <figure>
                        <img src={Compass} alt="" />
                    </figure>
                    <div>
                        <h3>Desenvolvedor de front-end</h3>
                        <h3>Compass.uol · Estágio</h3>
                        <h3>ago de 2022 - o momento · 3 meses</h3>
                        <h3>RemotoRemoto</h3>
                        <h3>Programa de bolsas com objetivo em capacitar profissionais em FrontEnd, abordando Scrum, Segurança em Aplicações Web, Git, Html, Rest, GraphQL, JavaScript, Typescript, Css, Sass, Package Managers, HTTP, Framework Javascript, SSR, PWA, Testing e etc. Trabalhando utilizando a metodologia Scrum</h3>    
                    </div>                    
                </div>
            </S.ExperienceDiv>
            <Footer />
        </S.Section>
    )
}
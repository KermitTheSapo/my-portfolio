import React from "react"
import * as S from "./experienceStyle.js"
import Compass from "../../assets/imgs/experiences/compass.png"
import Footer from "../footer/footer.js"
export default function Experience(){
    return(
        <S.Section>
            <S.H1>Experiencia</S.H1>
            <S.ExperienceDiv>
                <S.Experience>
                    <figure>
                        <img src={Compass} alt="" />
                    </figure>
                    <S.Content>
                        <S.Title>Desenvolvedor de front-end</S.Title>
                        <S.Company>Compass.uol · Estágio</S.Company>
                        <S.Date>ago de 2022 - o momento · 3 meses</S.Date>
                        <S.Format>Remoto</S.Format>
                        <S.Paragraph>Programa de bolsas com objetivo em capacitar profissionais em FrontEnd, abordando Scrum, Segurança em Aplicações Web, Git, Html, Rest, GraphQL, JavaScript, Typescript, Css, Sass, Package Managers, HTTP, Framework Javascript, SSR, PWA, Testing e etc. Trabalhando utilizando a metodologia Scrum</S.Paragraph>    
                    </S.Content>
                </S.Experience>
            </S.ExperienceDiv>
            <Footer />
        </S.Section>
    )
}



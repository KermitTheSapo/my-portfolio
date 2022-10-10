import React from "react"
import * as S from "../styles/homeStyle.js"
import Mario from "../assets/imgs/home/mario.gif"
import Footer from "../Components/footer.js"


export default function Home(){
    return(
        <S.Section>
            <S.Information>
                <S.Name>Robert J.</S.Name>
                <S.H2>Desenvolvedor Front-end</S.H2>
                <S.Course>Cursando Analise e desenvolvimento de sistemas na Uninassau (04/2022 - 04/2024)</S.Course>
                <S.Job>Estagiário Front-end do Programa de Bolsas da Compass.uol</S.Job>
                <S.Age>18 anos</S.Age>
                <S.Localization>Paulista, Pernambuco, Brasil </S.Localization>              
            </S.Information>
            <S.Imgs>
                <S.MarioImg src={Mario} alt="" />
            </S.Imgs>
            <Footer />
        </S.Section>
    )
}

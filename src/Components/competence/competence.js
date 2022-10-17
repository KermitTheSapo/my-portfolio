import React from "react"
import * as S from "./competenceStyle.js"
import Footer from "../footer/footer.js"
import Construction from "../../assets/imgs/construction/construction.gif"
export default function Competence(){
    return(
        <S.Section>
            <S.Div>
                <S.H1>Competence</S.H1>
                <S.Paragraph>Em Construção</S.Paragraph>
                <S.Img src={Construction} alt="" />
            </S.Div>
            <Footer />
        </S.Section>
    )
}
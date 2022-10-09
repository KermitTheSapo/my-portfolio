import React from "react"
import * as S from "../styles/certificatesStyle.js"
import Alura from "../assets/imgs/certificates/alura.png"
import Footer from "../Components/footer.js"
export default function Certificates(){
    return(
        <S.Section>
            <h1>Certificates</h1>
            <S.AllCertificates>
                <S.Certificate>
                    <S.FigureImg>
                        <S.Img src={Alura} alt="" />
                    </S.FigureImg>
                    <S.Information>
                        <S.Title>JavaScript: conhecendo o Browser e padrões de projeto</S.Title>
                        <S.Company>Alura</S.Company>
                        <S.Date>Emitido em out de 2022 · Sem data de expiração</S.Date>
                        <S.Code>Código da credencial 239fd4ca-ad70-4580-a240-1bef1fef5138</S.Code>
                        <S.Btn>Exibir Certificado!</S.Btn>
                    </S.Information>
                </S.Certificate>
            </S.AllCertificates>
            <Footer />
        </S.Section>
    )
}
import React from "react"
import * as S from "./contactStyle.js"
import Footer from "../footer/footer.js"

export default function Contact(){
    return(
        <S.Section>
            <S.Div>
                <S.H1>Contact</S.H1>
                <S.Paragraph>Fique a vontade para dar sua sugestão sobre o site ou falar comigo :)</S.Paragraph>
                <S.Form action="">
                    <S.Label htmlFor="">Nome: </S.Label>
                    <S.Input type="text" placeholder="Name"/>
                    <S.Label htmlFor="">Gmail: </S.Label>
                    <S.Input type="email" placeholder="Email"/>
                    <S.Label htmlFor="">Mensagem: </S.Label>
                    <S.Textarea name="" id="" cols="30" rows="10" placeholder="Message"></S.Textarea>
                    <S.SendBtn>Send</S.SendBtn>
                </S.Form>
            </S.Div>
            <Footer />
        </S.Section>
    )
}
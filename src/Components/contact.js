import React from "react"
import * as S from "../styles/contactStyle.js"
import Footer from "../Components/footer.js"

export default function Contact(){
    return(
        <S.Section>
            <h1>Contact</h1>
            <S.Paragraph>Fique a vontade para dar sua sugestão sobre o site ou falar comigo :)</S.Paragraph>
            <S.Form action="">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <button>Send</button>
            </S.Form>
            <Footer />
        </S.Section>
    )
}
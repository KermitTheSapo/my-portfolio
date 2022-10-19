import React, {useRef, useState} from "react"
import * as S from "./contactStyle.js"
import Footer from "../footer/footer.js"
import emailjs from '@emailjs/browser';

export default function Contact(){
    const [open, setOpen] = useState(false)

    function Modal(){
        setOpen(!false)
    }
    function ModalTrue(){
        setOpen(!true)
    }

    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmailMessage', 'template_dna91lt', form.current, 'ZoPxYGB95R71IYR_l')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.message);            
        });
        e.target.reset() 
    }

    function detectValue(){
        const input = document.querySelector("input")
        const textarea = document.querySelector("textarea")
        if(input.value !== "" && textarea.value !== ""){
            sendEmail()
            ModalTrue()
        } else{
            Modal()
        }
    }

    return(
        <S.Section>
            <S.Div>
                <S.H1>Contact</S.H1>
                <S.Paragraph>Fique a vontade para dar sua sugestão sobre o site ou falar comigo :)</S.Paragraph>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Label htmlFor="">Nome: </S.Label>
                    <S.Input name="name" type="text" placeholder="Digite seu nome: "/>
                    <S.Label htmlFor="">Assunto: </S.Label>
                    <S.Input name="subject" type="text" placeholder="Diga o assunto do gmail: "/>
                    <S.Label htmlFor="">Gmail: </S.Label>
                    <S.Input name="email" type="email" placeholder="Digite seu Gmail"/>
                    <S.Label htmlFor="">Mensagem: </S.Label>
                    <S.Textarea name="message" id="" cols="30" rows="10" placeholder="Mensagem"></S.Textarea>
                    <S.SendBtn onClick={() => {detectValue()}}>Send</S.SendBtn>
                    {open && <p>AAAAAAAAAAA</p>}
                </S.Form>
            </S.Div>
            <Footer />
        </S.Section>
    )
}
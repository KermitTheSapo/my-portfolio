import React from "react";
import * as S from "../styles/footerStyle.js";
import Gmail from "../assets/imgs/footer/gmail.svg";
import Github from "../assets/imgs/footer/github.svg";
import Linkedin from "../assets/imgs/footer/linkedin.svg";
    
export default function Footer(){
    return(
        <S.Footer>
            <a href="mailto:rjsf06@gmail.com" target="_blank" rel="noreferrer"><img src={Gmail} alt="aaaaaa" /></a>
            <a href="https://github.com/KermitTheSapo" target="_blank" rel="noreferrer"><img src={Github} alt="aaaaaa" /></a>
            <a href="https://www.linkedin.com/in/robertjosé/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="aaaa" /></a>         
        </S.Footer>
    )
}
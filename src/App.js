import React from "react"
import * as R from "react-router-dom"
import Certificates from "./Components/certificates.js"
import Competence from "./Components/competence.js"
import Contact from "./Components/contact.js"
import Experience from "./Components/experience.js"
import Home from "./Components/Home.js"
import Projects from "./Components/projects.js"
import Profile from "./assets/imgs/header/profile.png"
import Moon from "./assets/imgs/header/moon.svg"
import * as S from "./styles/header.js"
import {GlobalStyle} from "./styles/reset.js"
import Menu from "./assets/imgs/header/menu.svg"

export default function App(){
  return(
    <S.Header>
      <R.BrowserRouter>
      <GlobalStyle/>
        <S.HeaderDiv>
          <S.Div>
            <S.Img src={Profile} alt="a" />
            <S.Name>Robert J.</S.Name>
            <S.Borda></S.Borda>
            <S.Role>Desenvolvedor Front-end</S.Role>
          </S.Div>
          <S.Nav>
            <S.Ul>
              <S.LinkS to="/">Sobre Mim</S.LinkS>
              <S.LinkS to="/experience">Experiencia</S.LinkS>
              <S.LinkS to="/projects">Projetos</S.LinkS>
              <S.LinkS to="/competence">Competência</S.LinkS>
              <S.LinkS to="/certificates">Certificados</S.LinkS>
              <S.LinkS to="/contact">Contato</S.LinkS>
            </S.Ul>
          </S.Nav>
          <S.MenuDiv>
            <S.ImgMenu onClick={() =>{
              
            }} src={Menu} alt="" />
          </S.MenuDiv>
          <S.DivMode>
            <S.Moon src={Moon} alt="" />
            <S.Language>BR</S.Language>
          </S.DivMode>
        </S.HeaderDiv>
        <R.Routes>
          <R.Route path="/" element={<Home/>}/>
          <R.Route path="/experience" element={<Experience/>}/>
          <R.Route path="/competence" element={<Competence/>}/>
          <R.Route path="/projects" element={<Projects/>}/>
          <R.Route path="/certificates" element={<Certificates/>}/>
          <R.Route path="/contact" element={<Contact/>}/>
        </R.Routes>
      </R.BrowserRouter>      
    </S.Header>
  )
}

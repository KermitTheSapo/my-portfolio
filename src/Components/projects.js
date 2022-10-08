import React, {useState} from "react"
import * as S from "../styles/projectStyle.js"
import weeklyPlanning from "../assets/imgs/projects/weekly-planning.png"
export default function Projects(){

    const [open, setOpen] = useState(true)
    
    const Modal = () => {
        setOpen(!open)
    }
    return(
        <S.Section>
            <h1>Projects</h1>
            {/* <h2>ODS</h2> */}
            <S.SectionProjects>
                <S.ProjectDiv>
                    <S.Titulo>Weekly Planning</S.Titulo>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                    {open && <S.Paragraph>A weekly planning website, which adds activities on selected day and time, excludes all activities, saves/recalls activities in localStorage.</S.Paragraph>}
                </S.ProjectDiv>
            </S.SectionProjects>
        </S.Section>
    )
}
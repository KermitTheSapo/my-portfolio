import React, {useState} from "react"
import * as S from "./projectStyle.js"
import weeklyPlanning from "../../assets/imgs/projects/weekly-planning.png"
import Footer from "../footer/footer.js"
export default function Projects(){

    const [open, setOpen] = useState(false)
    
    const Modal = () => {
        setOpen(!open)
    }
    return(
        <S.Section>
            <S.Titulo>Projects</S.Titulo>
            {/* <h2>ODS</h2> */}
            <S.SectionProjects>
                <S.ProjectDiv>
                    <S.Name>Weekly Planning</S.Name>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-weekly-planning" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://weekly-planning.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A weekly planning website, which adds activities on selected day and time, excludes all activities, saves/recalls activities in localStorage.</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Weekly Planning</S.Name>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-weekly-planning" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://weekly-planning.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A weekly planning website, which adds activities on selected day and time, excludes all activities, saves/recalls activities in localStorage.</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Weekly Planning</S.Name>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-weekly-planning" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://weekly-planning.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A weekly planning website, which adds activities on selected day and time, excludes all activities, saves/recalls activities in localStorage.</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Weekly Planning</S.Name>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-weekly-planning" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://weekly-planning.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A weekly planning website, which adds activities on selected day and time, excludes all activities, saves/recalls activities in localStorage.</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Weekly Planning</S.Name>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-weekly-planning" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://weekly-planning.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A weekly planning website, which adds activities on selected day and time, excludes all activities, saves/recalls activities in localStorage.</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Weekly Planning</S.Name>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-weekly-planning" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://weekly-planning.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A weekly planning website, which adds activities on selected day and time, excludes all activities, saves/recalls activities in localStorage.</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Weekly Planning</S.Name>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-weekly-planning" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://weekly-planning.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A weekly planning website, which adds activities on selected day and time, excludes all activities, saves/recalls activities in localStorage.</S.Paragraph>}
                </S.ProjectDiv>
            </S.SectionProjects>
            <Footer />
        </S.Section>
    )
}
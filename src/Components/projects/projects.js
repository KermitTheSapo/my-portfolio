import React, {useState} from "react"
import * as S from "./projectStyle.js"
import Footer from "../footer/footer.js"
import weeklyPlanning from "../../assets/imgs/projects/weekly-planning.png"
import apiHP from "../../assets/imgs/projects/api-hp.png"
import BatataFlix from "../../assets/imgs/projects/batataFlix.png"
import Calculadora from "../../assets/imgs/projects/calculadora.png"
import Contador from "../../assets/imgs/projects/contador.png"
import Flavo from "../../assets/imgs/projects/flavo.png"
import FolioAgency from "../../assets/imgs/projects/folio-agency.png"
import FruitHub from "../../assets/imgs/projects/fruit-hub.png"
import KeepAlive from "../../assets/imgs/projects/keepAlive.png"
import lolScreen from "../../assets/imgs/projects/lol-screen.png"
import onboarding from "../../assets/imgs/projects/onboarding.png"
import Recipes from "../../assets/imgs/projects/recipes.png"
import TodoList from "../../assets/imgs/projects/todolist.png"




export default function Projects(){

    const [open, setOpen] = useState(false)
    
    const Modal = () => {
        setOpen(!open)
    }
    return(
        <S.Section>
            <S.Titulo>Projetos</S.Titulo>
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
                    <S.Name>Keep Alive</S.Name>
                    <S.Img src={KeepAlive} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-keep-alive" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://compass-keep-alive.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A website that promotes greater integration and centralization of functionality for employees at Compass who can safely access and enjoy the available functionalities, a login that can allow good usability to the user.</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Agenda 2030</S.Name>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/agenda-2030" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://agenda-2030.vercel.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>Agenda 2030</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Recipes VNW</S.Name>
                    <S.Img src={Recipes} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/Recipes-vnw" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://recipe-vnw.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>website done with gitFlow</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Api Harry Potter</S.Name>
                    <S.Img src={apiHP} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/Api-Harry-Potter" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://api-harry-potter.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>Api Harry Potter</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Folio Agency</S.Name>
                    <S.Img src={FolioAgency} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-folio-agency" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://kermitthesapo.github.io/compass-front-challenge-folio-agency/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>a website to find jobs and services</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Fruit Hub</S.Name>
                    <S.Img src={FruitHub} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-fruit-hub" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://kermitthesapo.github.io/compass-front-challenge-fruit-hub/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A website with steps screen</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Api Dogs</S.Name>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/api-dogs" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://api-dogs-vnw.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>Api Dogs</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>To Do App</S.Name>
                    <S.Img src={TodoList} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/ToDoApp-ReactHooks" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://todoapp-reacthooks.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A toDo with React hooks</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Onboarding</S.Name>
                    <S.Img src={onboarding} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/compass-front-challenge-onboarding" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://kermitthesapo.github.io/compass-front-challenge-onboarding/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A website with steps screen</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>BatataFlix</S.Name>
                    <S.Img src={BatataFlix} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/api-movies" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://api-filmes-vnw.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>A website with api Movies</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>ToDo-list-React</S.Name>
                    <S.Img src={weeklyPlanning} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/ToDo-list-React" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://todo-list-react-vnw.netlify.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>Uma lista ToDo em react, podendo adicionar novas coisas a serem feitas, remover, não podendo enviar uma string invisível, limpando o input ao clicar em adicionar e podendo adicionar conteúdo apertando enter</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>calculadora React</S.Name>
                    <S.Img src={Calculadora} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/calculadora-React" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="http://calculadora-react-theta.vercel.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>Calculadora feita com react de class e styled component</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>site-compras-atividade-vnw</S.Name>
                    <S.Img src={Flavo} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/site-compras-atividade-vnw" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://kermitthesapo.github.io/site-compras-atividade-vnw/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>Exemplo de um site de compra no estilo mobile first pela Vai Na Web</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Contador React</S.Name>
                    <S.Img src={Contador} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/Contador-react" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="http://contador-react-sand.vercel.app/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>Contador feito em react que conta de 0 a 100 sem ultrapassar</S.Paragraph>}
                </S.ProjectDiv>
                <S.ProjectDiv>
                    <S.Name>Lol Client Login</S.Name>
                    <S.Img src={lolScreen} alt="aaa" />
                    <S.ButtonsDiv>
                        <S.DetalhesBtn onClick={Modal}>&#10140; Mais Detalhes</S.DetalhesBtn>
                        <S.RepositoryLink href="https://github.com/KermitTheSapo/lol-client-login" target="_blank"><S.RepositoryBtn>Repository</S.RepositoryBtn></S.RepositoryLink>
                        <S.DeployLink href="https://kermitthesapo.github.io/lol-client-login/" target="_blank"><S.DeployBtn>Deploy</S.DeployBtn></S.DeployLink>
                    </S.ButtonsDiv>
                    {open && <S.Paragraph>Recriando o login do client do lol</S.Paragraph>}
                </S.ProjectDiv>
                
            </S.SectionProjects>
            <Footer />
        </S.Section>
    )
}
import styled from "styled-components";

export const Section = styled.section`
    background-color: var(--projectsSection);
`

export const Titulo = styled.h1`
    color: white;
    font-size: 2.5rem;
    text-align: center;
`
export const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`

export const ProjectDiv = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const SectionProjects = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
`

export const Name = styled.h3`
    text-align: center;
    color: white;
    font-size: 2rem;
`
export const DetalhesBtn = styled.button`
    background-color: black;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10px;
    width: 25%;
    height: 100%;
`
export const RepositoryBtn = styled.button`
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10px;
`

export const RepositoryLink = styled.a`
    width: 25%;
`
export const DeployBtn = styled.button`
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10px;
`

export const DeployLink = styled.a`
    width: 25%;
`

export const Paragraph = styled.p`
    color: white;
    width: 90%;
    align-self: center;
`

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
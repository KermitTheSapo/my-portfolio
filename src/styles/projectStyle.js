import styled from "styled-components";

export const Section = styled.section`
    background-color: var(--projectsSection);
`
export const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`

export const ProjectDiv = styled.div`
    width: 25%;
    border: solid red; 
`

export const SectionProjects = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
`

export const Titulo = styled.h3`
    text-align: center;
    color: white;
    font-size: 1.5rem;
`
export const DetalhesBtn = styled.button`
    background-color: black;
    color: white;
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
`

export const Paragraph = styled.p`
    color: white;
`
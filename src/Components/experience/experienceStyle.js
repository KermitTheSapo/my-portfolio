import styled from "styled-components";

export const Section = styled.section`
    background-color: var(--homeSection);
`

export const H1 = styled.h1`
    text-align: center;
    color: white;
    font-size: 2.5rem;
`

export const ExperienceDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 83.5vh;
    
    @media screen and (max-width: 500px){
        height: 81vh;
    }
`

export const Experience = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 40%;
    height: 20vh;
    gap: 20px;
    @media screen and (max-width: 500px){
        flex-direction: column;
        width: 90%;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const Title = styled.h1`
    font-size: 1.5rem;
`
export const Company = styled.h2`

`
export const Date = styled.h3`

`
export const Format = styled.h4`

`

export const Paragraph = styled.p`
    font-size: 1.2rem;
`
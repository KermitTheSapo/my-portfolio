import styled from "styled-components";

export const H1 = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
` 

export const Section = styled.section`
    background-color: var(--certificateSection);
`

export const AllCertificates = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 500px){
        width: 90%;
    }
`

export const Certificate = styled.div`
    display: flex;
    gap: 20px;
    width: 30%;
    @media screen and (max-width: 500px){
        width: 90%;
    }
`

export const FigureImg = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Img = styled.img`

`
export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`
export const Title = styled.h2`
color: white;
`
export const Company = styled.h3`
color: white;
`

export const Date = styled.h4`
color: white;
`
export const Btn = styled.button`
    background-color: var(--btn-send);
    border-radius: 5px;
    cursor: pointer;

`
import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
`

export const Section = styled.section`
    background-color: var(--contactSection);
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
`

export const Div = styled.div`
    height: 88vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 500px){
        height: 86.6vh;
        width: 90%;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 40vh;
    gap: 10px;
` 

export const Paragraph = styled.p`
    color: white;
    text-align: center;
`

export const Input = styled.input`
    background-color: #D9D9D9;
    border: solid #C3EEE4 3px;
    border-radius: 10px;
    width: 50%;
    height: 5vh;
    @media screen and (max-width: 500px){
        width: 90%;
    }
`
export const Textarea = styled.textarea`
    background-color: #D9D9D9;
    border: solid #C3EEE4 3px;
    border-radius: 10px;
    width: 50%;
    height: 10vh;
    @media screen and (max-width: 500px){
        width: 90%;
    }

`

export const SendBtn = styled.button`
    width: 30%;
    background-color:#D9D9D9;
    border-radius: 10px;
    color: black;
    height: 5vh;
    font-size: 1.5rem;
    cursor: pointer;    
`

export const Label = styled.label`
    text-align: start;
    width: 48%;
    color: white;
    font-weight: 700;
    @media screen and (max-width: 500px){
        width: 90%;
    }
`
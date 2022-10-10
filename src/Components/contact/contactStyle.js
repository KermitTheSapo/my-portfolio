import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
`

export const Section = styled.section`
    background-color: var(--contactSection);
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    height: 40vh;
` 

export const Paragraph = styled.p`
    color: white;
`

export const Input = styled.input`
    background-color: #D9D9D9;
    border: solid #C3EEE4 3px;
    border-radius: 10px;
    width: 50%;
    height: 5vh;
`
export const Textarea = styled.textarea`
    background-color: #D9D9D9;
    border: solid #C3EEE4 3px;
    border-radius: 10px;
    width: 50%;
    height: 10vh;

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
`
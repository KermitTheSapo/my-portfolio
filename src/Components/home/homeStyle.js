import styled from "styled-components";

export const Section = styled.section`
    background-color: black;
    display: flex;
    align-items: center;   
    justify-content: center;
    flex-direction: column;
    height: 93vh;
`
export const H2 = styled.h2`
    width: 410px;
    color: white;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2rem;

    @keyframes typing {
        from{
            width: 0;
        }
    }
    @keyframes blink {
        50%{
            border-color: transparent;
        }   
    }
`

export const Information = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%;
    gap: 10px;
`

export const Imgs = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MarioImg = styled.img`
    width: 100%;
`

export const Name = styled.h1`
    color: white;
    font-size: 3rem;
`
export const Course = styled.h3`
    color: white;
`
export const Job = styled.h3`
    color: white;
`
export const Age = styled.h3`
    color: white;
`

export const Localization = styled.h3`
    color: white;
`
export const Btn = styled.button`
    width: 15%;
    background-color:#D9D9D9;
    border-radius: 10px;
    color: black;
    height: 4vh;
    font-size: 1.5rem;
    cursor: pointer;  
`
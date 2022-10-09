import styled from "styled-components";

export const Section = styled.section`
    background-color: black;
    height: 93vh;
    display: flex;
    align-items: center;   
    justify-content: center;
    flex-direction: column;
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

export const Name = styled.h3`
    color: white;
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
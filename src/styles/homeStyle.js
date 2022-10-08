import styled from "styled-components";

export const Section = styled.section`
    background-color: var(--homeSection);
`
export const H2 = styled.h2`
    width: 410px;
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
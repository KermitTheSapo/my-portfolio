import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "leelawadee";
    src: url(leelawadee);
}
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "leelawadee";
    }

    &:root{
        --border: #8C9F9B;
        --button: #323736;
        --principal-color: #C3EEE4;
        --name: #454F41;
        --homeSection: #8C9F9B;
        --projectsSection: #2A3633;
        --contactSection: #08211B;
        --certificateSection: #244840;
        --competencesSection: #14221F;
        
    }
`
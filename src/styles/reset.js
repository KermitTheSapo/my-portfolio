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
    }
`
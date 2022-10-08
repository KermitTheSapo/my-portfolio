import styled from "styled-components";
import {Link} from "react-router-dom"


export const Header = styled.header`
    
`

export const Img = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 100%;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 23%;
    height: 100%;
    @media screen and (max-width: 1440px){
        width: 30%;
    }
    @media screen and (max-width: 1024px){
        width: 35%;
    }
    @media screen and (max-width: 768px){
        width: 50%;
    }
`
export const Name = styled.h3`
    color: var(--name);
`
export const Role = styled.h3`
    color: var(--name);
    @media screen and (max-width: 600px){
        display: none;
    }
`

export const Borda = styled.div`
    height:70%;
    width: 1px;
    background-color:var(--border);
    @media screen and (max-width: 600px){
        display: none;
    }
`

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--principal-color);
    height: 7vh;
`
export const Nav = styled.nav`
    width: 50%;

    @media screen and (max-width: 768px){
        
    }

`

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        flex-direction: column;
        position: absolute;
        top: 7vh;
        right: 0;
        width: auto;
        background-color: var(--principal-color);
        gap: 10px;
        z-index: 3;
    }
`

export const LinkS = styled(Link)`
    text-decoration: none;
    color: white;
    height: 3vh;
    background-color: var(--button);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 0px 4px 4px 0px #00000040;
    cursor: pointer;
`

export const DivMode = styled.div`
    display: flex;
    width: 5%;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 50px;
    @media screen and (max-width: 1440px){
        width: 8%;
    }
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Moon = styled.img`
    cursor: pointer;
`

export const Language = styled.h3`
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 3px;
    padding-bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    border-radius: 10px;
    cursor: pointer;
`

export const MenuDiv = styled.div`
    @media screen and (min-width: 769px){
        display: none;
    }

`

export const ImgMenu = styled.img`

`
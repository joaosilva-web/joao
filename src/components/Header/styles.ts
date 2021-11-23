import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 80px;
    width: 100%;

`

export const Nav = styled.nav`
    width: 421px;
    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
        list-style: none;
    }
`
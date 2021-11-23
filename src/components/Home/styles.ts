import styled from "styled-components";

interface InterfacePropsHome {
    background: string;
}

export const Home = styled.section<InterfacePropsHome>`
    display: flex;
    flex-direction: row-reverse;
    
    width: 100%;
    height: 100vh;
    
    background-image: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    position: relative;
    z-index: -1;

    img {
        position: absolute;
        bottom: 0;
        left: 20px;
    }
`

export const ContentBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;

    width: 50%;
    height: 100%;

    p{
        font-size: 24px;
        font-weight: 300;
    }

    h2 {
        width: 609px;

        font-weight: 400;
        font-size: 42px;
        
        span {
            color: #D90368;
        }
    }

    div {
        width: 609px;
        display: flex;
        justify-content: space-between;

        button {
            min-width: 246px;
            background: #D90368;
            
            color: white;
            font-size: 24px;
        }
    }
`
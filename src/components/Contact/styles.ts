import styled from "styled-components";

interface InterfaceInputProps {
    tamanho: string;
}

export const Contact = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    width: 100%;
    height: 100vh;

    h2 {
        font-size: 36px;
        text-align: center;
    }
`

export const ContentBox = styled.div`
    display: flex;
    
    width: 100%;
    
    div {
        display: flex;
        justify-content: center;
        width: 50%;
        align-items: center;

        form {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 608px;
            row-gap: 16px;

            textarea {
                border-radius: 12px;
                height:240px;
                width: 100%;
                outline-color: #3F84E5;
                

                font-size: 24px;
                padding: 10px;

                ::placeholder{
                font-size: 24px;
                }
            }

            button {
                background: #04A777;
                margin: 0 auto;
                color: white;

                font-size: 24px;

                width: 224px;
            }
        }
    }
`

export const Media = styled.div`
       div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        height: 50%;
        width: 70%;

        a{
            color: white;

            font-size: 24px;
            font-weight: 300;
            text-decoration: none;
        }
       }
`

export const Input = styled.input<InterfaceInputProps>`
    border: 0;
    border-radius: 12px;
    padding: 0 10px;

    font-size: 24px;

    width: ${props => props.tamanho};
    height: 64px;

    outline-color: #3F84E5;

    ::placeholder{
        font-size: 24px;
    }
`
import styled from "styled-components";

export const Portfolio = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;

    h2 {
        margin-top: 80px;
        text-align: center;
        font-size: 36px;
        font-weight: bold;
    }

    nav {
        width: 456px;
        ul {
            display: flex;
            justify-content: space-between;

            list-style: none;
        
            margin-top: 34px;

            li {
                padding: 10px 15px;
                border-radius: 10px;
                &.selected {
                    background: #D90368;
                }
            }
        }
    }
`

export const ContentBox = styled.div`
margin-top: 34px;
    width: 710px;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
`

export const Card = styled.div`
    width: 200px;
    height: 120px;
    background: white;
    border-radius: 10px;
`
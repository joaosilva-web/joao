import * as S from "./styles"
import { FaSun } from "react-icons/fa"

export default function Header() {
    return(
        <S.Header>
            <h1>João Silva Dev Web</h1>
            <S.Nav>
                <ul>
                    <li>Home</li>
                    <li>Potfólio</li>
                    <li>Contact</li>
                    <li><FaSun/></li>
                </ul>
            </S.Nav>
        </S.Header>
    );
}
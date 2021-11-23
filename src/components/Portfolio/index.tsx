import * as S from "./styles";

export default function Portfolio() {
    return(
        <S.Portfolio>
            <h2>Portfólio</h2>

            <nav>
                <ul>
                    <li className="selected">
                        all
                    </li>
                    <li>
                        Web App
                    </li>
                    <li>
                        Mobile App
                    </li>
                    <li>
                        Design
                    </li>
                </ul>
            </nav>
            
            <S.ContentBox>
                <S.Card></S.Card>
                <S.Card></S.Card>
                <S.Card></S.Card>
                <S.Card></S.Card>
                <S.Card></S.Card>
                <S.Card></S.Card>
                <S.Card></S.Card>
                <S.Card></S.Card>
                <S.Card></S.Card>
            </S.ContentBox>
        </S.Portfolio>
    );
}
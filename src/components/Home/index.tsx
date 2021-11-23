import * as S from "./styles";
import bg from "../../assets/bg.png";
import foto from "../../assets/eu.png"

interface InterfacePropsHome {
    background: string;
}

export default function Home() {
    return(
        <S.Home background={bg}>
            <img src={foto} alt="" />
            <S.ContentBox>
                <h2>
                    <p>Hi there, i’m</p>
                    João Silva, And i’m a web developer, with focus in front-end and i Develop with <span> ReactJs</span>
                </h2>
                <div>
                    <button>Contact me</button>
                    <button>Download My Resume</button>
                </div>
            </S.ContentBox>
        </S.Home>
    );
}
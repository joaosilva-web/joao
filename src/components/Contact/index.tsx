import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import * as S from "./styles"

export default function Contact() {
    return(
        <S.Contact>
            <h2>Contact me</h2>
            <S.ContentBox>
            <S.Media>
               <div>
               <a href="(44) 99700-5614"><FaWhatsapp/>(44) 99700-5614</a>
                <a href="www.linkedin.com/in/joão-silva-dev-web"><FaLinkedin/>www.linkedin.com/in/joão-silva-dev-web</a>
                <a href="https://github.com/joaosilva-web"><FaGithub/>https://github.com/joaosilva-web</a>
               </div>
            </S.Media>
            <div>
                <form>
                    <S.Input tamanho="48%" placeholder="Nome..."/>
                    <S.Input tamanho="48%" placeholder="Sobrenome..."/>
                    <S.Input tamanho="100%" placeholder="E-mail..."/>
                    <textarea placeholder="Deixe sua mensagem...">
                    </textarea>
                    <button>Submit</button>
                </form>
            </div>
            </S.ContentBox>
        </S.Contact>
    );
}
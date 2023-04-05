import { ContainerPage, Title, ContaineterButtons, Botao, TextAbout } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { TextoInEnglish, TextoInPortuguese } from '../constants/Textos';

export const AboutPage = () => {

    const navigate = useNavigate()
    const texts = { en: { text: TextoInEnglish, title: "About Page" }, ptBr: { text: TextoInPortuguese, title: "Página Sobre" } }
    const params = useParams()

    const goPage = (path) => {
        navigate(path)
    }

    return (
        <ContainerPage>
            <Title>{texts[params.language].title}</Title>
            <TextAbout>{texts[params.language].text}</TextAbout>
            <ContaineterButtons>
                <Botao onClick={() => { goPage('/') }}>Home</Botao>
                <Botao onClick={() => { goPage(-1) }}>Voltar</Botao>
            </ContaineterButtons>
        </ContainerPage>
    )
}
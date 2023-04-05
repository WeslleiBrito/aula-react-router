import { ContainerPage, Title, Botao, ContaineterButtons } from "./style";
import { useNavigate } from "react-router-dom";


export const HomePage = () => {
    const navigate = useNavigate()

    const goPage = (path, language) => {
        navigate(`${path}/${language}`)
    }

    return (
        <ContainerPage>
            <Title>Home Page</Title>
            <ContaineterButtons>
                <Botao onClick={() => goPage('/about', "ptBr")}>Sobre</Botao>
                <Botao onClick={() => goPage('/about', "en")}>About</Botao>
            </ContaineterButtons>

        </ContainerPage>
    )

}

import { ContainerPage, Title, Botao, ContaineterButtons } from "./style";
import { useNavigate } from "react-router-dom";
import { goPageHome } from "../routes/Coordinator";

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <ContainerPage>
            <Title>Home Page</Title>
            <ContaineterButtons>
                <Botao onClick={() => goPageHome(navigate, '/about', "ptBr")}>Sobre</Botao>
                <Botao onClick={() => goPageHome(navigate, '/about', "en")}>About</Botao>
            </ContaineterButtons>

        </ContainerPage>
    )

}

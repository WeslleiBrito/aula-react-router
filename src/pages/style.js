import styled from "styled-components"

export const ContainerPage = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 10vh;
`

export const Botao = styled.button`
    height: 8vh;
    width: 25vw;
    border-radius: 1em;
    cursor: pointer;
    border: none;
    background-color: aqua;
    color: #845EC2;
    font-size: 1rem;
    font-weight: 900; 

`

export const ContaineterButtons = styled.aside`
    display: flex;
    flex-direction: row;
    height: 10%;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`

export const TextAbout = styled.p`
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
    text-align: justify;
    width: 90vw;

` 
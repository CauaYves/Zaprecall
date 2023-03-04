import styled from "styled-components"
import QUESTIONS from "../constants/QUESTIONS"

export default function Footer({concluidos}){
    const flashCompleted = concluidos.length

    return(
        <FooterContainer>
            <p>
            
                <span> {flashCompleted}/{QUESTIONS.length} </span>
                <span> CONCLUIDOS </span>
            </p>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    background-color: white;
    font-weight: 400;

    width: 100vw;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
`
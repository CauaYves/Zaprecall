import styled from "styled-components"

export default function Footer(){
    return(
        <FooterContainer>
            <p>
                <span>0/4</span>
                <span>CONCLUIDOS</span>
            </p>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    background-color: white;

    width: 100vw;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
`
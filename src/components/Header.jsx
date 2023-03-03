import logo from '../assets/logo.png'
import styled from 'styled-components'
export default function Header() {
    return (
        <TopContainer>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <Title>
                <h1>ZapRecall</h1>
            </Title>
        </TopContainer>
    )
}
const TopContainer = styled.div`
background-color: #FB6B6B;
    width: 100vw;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 1;
`
const Logo = styled.div`
    img{
        height: 60px;
    }
`
const Title = styled.div`
    color: white;
    margin-left: 15px;
`
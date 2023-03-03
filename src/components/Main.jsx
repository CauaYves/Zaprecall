import play from '../assets/seta_play.svg'
import styled from 'styled-components'

export default function Main() {
    return (
        <MainContainer>
            <CardContainer>
                <Card>
                    <p>Pergunta 1</p>
                    <img src={play} alt='play' className='icon' />
                </Card>
                <Card>
                    <p>Pergunta 1</p>
                    <img src={play} alt='play' className='icon' />
                </Card>
                <Card>
                    <p>Pergunta 1</p>
                    <img src={play} alt='play' className='icon' />
                </Card>
                <Card>
                    <p>Pergunta 1</p>
                    <img src={play} alt='play' className='icon' />
                </Card>
            </CardContainer>
        </MainContainer >
    )
}
const MainContainer = styled.div`
    height: 100vh;
    padding-top: 100px;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Card = styled.div`
    background-color: white;

    margin: 10px;
    padding: 0px 20px;
    width: 300px;

    border-radius: 5px;
    box-sizing: border-box;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 20px;
    }
`
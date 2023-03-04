import play from '../assets/seta_play.svg'
import turn from '../assets/seta_virar.svg'
import check from '../assets/icone_certo.png'
import fail from '../assets/icone_erro.png'
import almost from '../assets/icone_quase.png'
import styled from 'styled-components'

export default function Card({ question, answer, mapIndex, stateCard, setStateCard, disabled, setDisabled, concluidos, setConcluidos, quaseConcluidos, setQuaseConcluidos, naoLembrados, setNaoLembrados }) {

    const index = mapIndex + 1
    if (naoLembrados.includes(index)) {
        return (
            <FinalFailCardComp>
                <p>Pergunta{index}</p>
                <img
                    src={fail}
                    alt='fail'
                    className='icon'
                />
            </FinalFailCardComp>
        )

    } else if (quaseConcluidos.includes(index)) {
        return (
            <FinalAlmostCardComp>
                <p>Pergunta{index}</p>
                <img
                    src={almost}
                    alt='almost'
                    className='icon'
                />
            </FinalAlmostCardComp>
        )
    } else if (concluidos.includes(index)) {

        return (
            <FinalRightCardComp>
                <p>Pergunta {index}</p>
                <img
                    src={check}
                    alt='check'
                    className='icon'
                />
            </FinalRightCardComp>
        )

    } else if (disabled.includes(index)) {
        console.log(concluidos.length)
        return (
            <AnswerComp>

                <TextContainer>
                    <p>{answer}</p>
                </TextContainer>
                <ButtonContainer>
                    <RedButton onClick={() => setNaoLembrados([...naoLembrados, index])}>Não lembrei</RedButton>
                    <YellButton onClick={() => setQuaseConcluidos([...quaseConcluidos, index])}>Quase não lembrei</YellButton>
                    <GreeButton onClick={() => setConcluidos([...concluidos, index])}>Zap!</GreeButton>
                </ButtonContainer>

            </AnswerComp>
        )
    } else if (stateCard.includes(index)) {

        return (
            <QuestionComp disabled={disabled}>
                <p>{question}</p>
                <Qicon>
                    <img
                        src={turn}
                        alt={turn}
                        onClick={() => setDisabled([...disabled, index])}
                    />
                </Qicon>
            </QuestionComp>
        )
    } else if (!stateCard.includes(index)) {
        return (
            <CardComp>
                <p>Pergunta {index}</p>
                <img
                    src={play}
                    alt='play'
                    className='icon'
                    onClick={() => setStateCard([...stateCard, index])}
                />
            </CardComp>
        )
    }

}
const CardComp = styled.div`
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
const QuestionComp = styled.div`
    color: #333333;
    background-color: #FFFFD4;
    box-sizing: border-box;

    padding: 20px;
    width: 300px;
    min-height: 131px;
    border-radius: 5px;
    margin: 12.5px 0px;

    position: relative;

    transform: rotateY(0deg);
    backface-visibility: hidden;
`
const Qicon = styled.div`
    width: 30px;

    position: absolute;
    right: 15px;
    bottom: 5px;
`
const AnswerComp = styled.div`
    box-sizing: border-box;
    min-height: 131px;
    width: 300px;
    padding: 5px 15px;
    border-radius: 5px;
    margin: 10px;
    font-size: 18px;

    color: #333333;
    background-color: #FFFFD4;

    display: flex;
    flex-direction: column;
`
const TextContainer = styled.div`
    text-align: left;
    display: flex;
    word-wrap: break-word;

`
const ButtonContainer = styled.div`
    font-weight: 400;
    font-size: 12px;
    display: flex;
    flex-direction: row;
`
const RedButton = styled.div`
    padding: 5px;
    margin: 5px; 
    display: flex;
    align-items: center;
    justify-content: center;
    width:85px;
    height: 37px;
    border-radius: 5px;
    background-color: #FF3030;
    color: white;
    text-align: center;
    cursor: pointer;

`
const YellButton = styled.div`
    padding: 5px;

    margin: 5px; 
    display: flex;
    align-items: center;
    justify-content: center;

    width: 85px;
    height: 37px;
    border-radius: 5px;
    background-color: #FF922E;
    color: white;
    text-align: center;
    cursor: pointer;

`
const GreeButton = styled.div`
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 5px;
    width:85px;
    height: 37px;
    border-radius: 5px;
    background-color: #2FBE34;
    color: white;
    text-align: center;
    cursor: pointer;

`
const FinalRightCardComp = styled.div`
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

    text-decoration: line-through;
    color: #2FBE34;

    img{
        width: 20px;
    }
`
const FinalAlmostCardComp = styled.div`
    background-color: white;
    color: #FF922E;
    margin: 10px;
    padding: 0px 20px;
    width: 300px;

    border-radius: 5px;
    box-sizing: border-box;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-decoration: line-through;
   

    img{
        width: 20px;
    }
`
const FinalFailCardComp = styled.div`
    background-color: white;
    color: #FF3030;
    margin: 10px;
    padding: 0px 20px;
    width: 300px;

    border-radius: 5px;
    box-sizing: border-box;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-decoration: line-through;
   

    img{
        width: 20px;
    }
`
import Footer from "./components/Footer"; //Todo os imports estão aqui.
import Header from "./components/Header"
import styled from "styled-components";
import Card from "./components/Card";
import QUESTIONS from "./constants/QUESTIONS";
import { useState } from "react";

function App() {

  const [stateCard, setStateCard] = useState([])
  const [disabled, setDisabled] = useState([])
  const [concluidos, setConcluidos] = useState([])
  const [quaseConcluidos, setQuaseConcluidos] = useState([])
  const [naoLembrados, setNaoLembrados] = useState([])

  return (
    <Container>
      <Header />
      <CardContainer>

        {QUESTIONS.map((i, index) => {
          return(
            <Card 
              setQuaseConcluidos={setQuaseConcluidos}
              quaseConcluidos={quaseConcluidos}

              naoLembrados={naoLembrados}
              setNaoLembrados={setNaoLembrados}

              concluidos={concluidos}
              setConcluidos={setConcluidos}

              disabled={disabled}
              setDisabled={setDisabled}

              stateCard={stateCard}
              setStateCard={setStateCard}  
              
              key={index} 
              question={i.question} 
              answer={i.answer} 
              mapIndex={index}

            />

          )
        })}

      </CardContainer>
      <Footer  
        naoLembrados={naoLembrados}
        quaseConcluidos={quaseConcluidos}
        concluidos={concluidos}
      />
    </Container>
  )
}
const Container = styled.div`
  background-color: #FB6B6B;

  height: 100vh;
`
const CardContainer = styled.div`
  background-color: #FB6B6B;

  min-height: 480px;
  max-height: 2500px;
  padding-bottom: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export default App;
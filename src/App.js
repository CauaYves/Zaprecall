import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header"
import GlobalStyle from "./assets/styles/GlobalStyles";
import styled from "styled-components";
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}
const Container = styled.div`
  background-color: #FB6B6B;
`
export default App;




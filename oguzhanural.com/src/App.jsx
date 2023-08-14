import styled from "styled-components"
import Hero from './components/Hero'
import Works from './components/Works'
import Who from './components/Who'
import Contact from './components/Contact'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-image: url("./img/bground.svg");
  &::-webkit-scrollbar {
    display: none ;
  }
`;

function App() {

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />

    </Container>
  )
}

export default App

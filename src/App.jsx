import Accordion from "./components/accordion"
import Container from "./components/container"
import RandomColor from "./components/random-color"

const App = () => {
  return (
    <>
      <Container>
        <Accordion />
      </Container>
      <Container>
        <RandomColor />
      </Container>
    </>
  )
}

export default App

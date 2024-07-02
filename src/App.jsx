import Accordion from "./components/accordion"
import Container from "./components/container"
import ImageSlider from "./components/image-slider"
import RandomColor from "./components/random-color"
import StarRating from "./components/star-rating"

const App = () => {
  return (
    <>
      <Container>
        <Accordion />
      </Container>
      <Container>
        <RandomColor />
      </Container>
      <Container>
        <StarRating stars={5} />
      </Container>
      <Container>
        <ImageSlider />
      </Container>
    </>
  )
}

export default App

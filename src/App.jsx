import Accordion from "./components/accordion"
import Container from "./components/container"
import ImageSlider from "./components/image-slider"
import ProductList from "./components/product-list"
import RandomColor from "./components/random-color"
import ScrollIndicator from "./components/scroll-indicator"
import StarRating from "./components/star-rating"

const App = () => {
  return (
    <>
      <ScrollIndicator />
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
      <ProductList />
    </>
  )
}

export default App

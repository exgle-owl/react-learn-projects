import './index.css'
import images from './data'
import { useState } from 'react'

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const onPrevBtnClick = () => {
    if(currentImageIndex === 0) {
      return
    }
    setCurrentImageIndex(currentImageIndex - 1)
  }

  const onNextBtnClick = () => {
    if (currentImageIndex >= images.length - 1) {
      return
    }
    setCurrentImageIndex(currentImageIndex + 1)
  }

  return (
    <section className="image-slider">
      <button
        onClick={onPrevBtnClick}
        className={currentImageIndex === 0 ? 'disabled' : ''}
      >
        &lt;
      </button>
      {
        images.map((image, index) => {
          if (index !== currentImageIndex) {
            return
          }
          return (
            <img key={image.id} {...image} />
          )
        })
      }
      <button
        onClick={onNextBtnClick}
        className={currentImageIndex === images.length - 1 ? 'disabled' : ''}
      >
        &gt;
      </button>
      <div className="circle-indicators">
        {images.map((_, index) => {
          return (
            <div
            key={index}
            className={index === currentImageIndex ? "circle active" : "circle"}
            ></div>
          )
        })}
      </div>
    </section>
  )
}

export default ImageSlider

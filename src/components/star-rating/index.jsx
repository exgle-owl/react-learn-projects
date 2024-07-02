import './index.css'
import star from '../../assets/star.svg'
import filledStar from '../../assets/filled-star.svg'
import { useState } from 'react'

const StarRating = ({ stars }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = i => {
    setRating(i)
  }

  const handleMouseEnter = i => {
    setHover(i)
  }

  const handleMouseLeave = () => {
    setHover(rating)
  }

  return (
    <section className="star-rating">
      {
        Array(stars).fill('').map((_, i) => {
          i += 1
          return (
            <img
              key={i}
              src={i <= (rating || hover) ? filledStar : star}
              onClick={() => handleClick(i)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave()}
              alt="filled star"
            />
          )
        })
      }
    </section>
  )
}

export default StarRating

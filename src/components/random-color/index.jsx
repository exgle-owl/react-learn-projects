import { useState } from 'react'
import './index.css'

const RandomColor = () => {
  const [color, setColor] = useState('rgb(250, 250, 250)')

  const handleGenerateColor = () => {
    const randomRed = Math.floor(Math.random() * 256)
    const randomGreen = Math.floor(Math.random() * 256)
    const randomBlue = Math.floor(Math.random() * 256)
    const newColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    rgbToHex(color)
    setColor(newColor)
  }

  const rgbToHex = rgbColor => {
    const [r, g, b] = rgbColor
      .replace('rgb(', '')
      .replace(')', '')
      .split(',')
    
    return `
      #${Number(r).toString(16)}${Number(g).toString(16)}${Number(b).toString(16)}`
  }

  return (
    <section
      className="random-color"
      style={{
        backgroundColor: color
      }}
    >
      <section className="colors">
        <p>RGB: {color}</p>
        <p>HEX: {rgbToHex(color)}</p>
      </section>
      <button onClick={handleGenerateColor}>Generate Color</button>
    </section>
  )
}

export default RandomColor

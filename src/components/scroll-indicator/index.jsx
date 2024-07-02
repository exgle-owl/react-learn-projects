import { useEffect, useState } from 'react'
import './index.css'

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setScrollPercentage((scrolled / height) * 100)
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <div className="scroll-indicator">
      <div className="progress" style={{ width: `${scrollPercentage}%` }} />
    </div>
  )
}

export default ScrollIndicator

import { useState } from 'react'
import data from './data'
import './index.css'

const Accordion = () => {
  const [selected, setSelected] = useState(null)

  const handleSelection = id => {
    setSelected(selected === id ? null : id)
  }

  return (
    <ul className="accordion">
      {
        data && data.length > 0 ?
        data.map(({ id, question, answer }) => {
          return (
            <li key={id} onClick={() => handleSelection(id)}>
              <h3>{question} <span className="triangle">▽</span> </h3>
              {selected === id && <p>{answer}</p>}
            </li>
          )
        })
        :
        <p>No data found</p>
      }
    </ul>
  )
}

export default Accordion

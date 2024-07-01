import { useState } from 'react'
import data from './data'
import './index.css'

const Accordion = () => {
  const [selected, setSelected] = useState([])

  const handleSelection = id => {
    let newSelected = selected.slice()
    if (newSelected.includes(id)) {
      newSelected.splice(newSelected.indexOf(id))
    } else {
      newSelected.push(id)
    }
    setSelected(newSelected)
  }

  return (
    <ul className="accordion">
      {
        data && data.length > 0 ?
        data.map(({ id, question, answer }) => {
          return (
            <li key={id} onClick={() => handleSelection(id)}>
              <h3>{question} <span className="triangle">▽</span> </h3>
              {selected.includes(id) && <p>{answer}</p>}
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

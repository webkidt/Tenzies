import { useState } from 'react'
import Die from './Die'
import './App.css'

function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    let diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6))
    }
    return diceArray
  }
  const diceElements = dice.map((val, ix) => <Die key={ix} value={val} />)

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  )
}

export default App

import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './Die'
import './App.css'

function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      })
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  const diceElements = dice.map((die, ix) => <Die key={die.id} value={die.value} />)

  return (
    <main>
      <main>
        <div className="dice-container">{diceElements}</div>
        <button className="roll-dice" onClick={rollDice}>
          Roll Dice
        </button>
      </main>
    </main>
  )
}

export default App

import Die from './Die'
import './App.css'

function App() {
  let dataArr = [
    {value: 1, id: 1},
    {value: 2, id: 2},
    {value: 4, id: 3},
    {value: 6, id: 4},
    {value: 3, id: 5},
    {value: 5, id: 6},
    {value: 1, id: 7},
    {value: 6, id: 8},
    {value: 5, id: 9},
    {value: 1, id: 10}
  ]
  let tenDices = dataArr.map(data => (
    <Die value={data.value} key={data.id} />
  ));
  return (
    <main>
      <div className="dice-container">
        {tenDices}
      </div>
    </main>
  )
}

export default App

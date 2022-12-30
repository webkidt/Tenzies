import './App.css'

function Die(props) {
  let styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white',
  }
  return (
    <div style={styles} className="die-face">
      <h2 className="die-num">{props.value}</h2>
    </div>
  )
}

export default Die

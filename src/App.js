//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
const [age, setAge] = useState()
const [upperheartrate, setupperheartrate] = useState()
const[lowerheartrate, setlowerheartrate] = useState()

const calculate = () => {
  const Upper = (220 - age ) * 0.85
  setupperheartrate(Upper)
  const Lower = (220 - age) * 0.65
  setlowerheartrate(Lower)
}
 return (
  <div >
    <h3>Heart Rate Limits Calculator</h3>
    <form>
      <div>
        <label>Age</label>
        <input type = "number"
        placeholder='Age here'
        value = {age}
        onChange = { e => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Heart Rate Limits</label>
        <output>{lowerheartrate} - {upperheartrate}</output>
      </div>

    <button type = "button" onClick={calculate}> calculate </button>

    </form>
  </div>
  );
}

export default App;

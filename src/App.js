import './App.css';
import { useState } from 'react';

const Dog = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h2>Race: {props.race}</h2>
    </>
  )
}


function App() {
  const name = 'Shanshan';
  const [totalDog, setTotalDog] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's go {name}</h1>
        <h2>Total amount of dogs are {totalDog}</h2>
        <button onClick={() => setTotalDog((prevCount) => prevCount + 1)}>Add a dog</button>
        <button onClick={() => setTotalDog((prev) => 0)}>Refresh</button>
      </header>
      <div>
        <Dog name='Kuro' age='3' race='Shiba'/>
        <Dog name='Oreo' age='3' race='Shiba'/>
        <Dog name='Gigi' age='1' race='Chiwawa'/>
      </div>
    </div>
  );
}

export default App;

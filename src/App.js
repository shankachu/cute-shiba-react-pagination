import logo from './logo.svg';
import './App.css';

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
  const isUserLogdedIn = true;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's go {name}</h1>
        {name && isUserLogdedIn ? (
          <>
          There is a name
          </>) : (
            <>
              <h1>There is not name</h1>
              <h2>test2</h2>
            </>
        )}
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

import logo from './logo.svg';
import './App.css';

const Dog = () => {
  return (
    <>
      <h1>Name: Kuro</h1>
      <h2>Age: 3</h2>
      <h2>Race: Shiba</h2>
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
        <Dog />
        <Dog />
        <Dog />
        <Dog />
        <Dog />
      </div>
    </div>
  );
}

export default App;

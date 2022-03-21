import logo from './logo.svg';
import './App.css';

function App() {


  const baik = "baik";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />




        <input type="text" name="textfield" placeholder="Search"></input>

        <button type="button">Search</button>
        <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif
        " alt="Italian Trulli"></img>

        {baik === "baik" ? <p> react ternyata baik</p> : <p> react ternyata jahat</p>}
      </header>
    </div>
  );
}

export default App;

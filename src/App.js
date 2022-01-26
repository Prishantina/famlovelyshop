import './App.css';
import NavBar from './Components/NavBar.js';
import imagen from './Components/logo-fam/logo.png';
import CardComponent from './Components/CardComponent/CardComponent';

const greyColor = "grey";

function App() {
  return (
    <div className="App">
      <header className="App-header">
{        <img src={imagen} alt='logo-fam' width="220px" height="auto" /> }
          <NavBar/>
          <CardComponent color= {greyColor} />
          <CardComponent color= {greyColor} />
          <CardComponent color= {greyColor} />
      </header>
    </div>
  );
}

export default App;

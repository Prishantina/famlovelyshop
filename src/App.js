import './App.css';
import NavBar from './Components/NavBar.js';
import imagen from './Components/logo-fam/logo.png';
import CardComponent from './Components/CardComponent/CardComponent';
import ItemList from './Components/itemListContainer';
import ItemList2 from './Components/ItemList2';

const greyColor = "grey";
const lightblueColor = "lightblue";
const lightgreenColor = "lightgreen";

function App() {
  return (
    <div className="App">
        <header className="App-header">
{         <img src={imagen} alt='logo-fam' width="220px" height="auto" /> }
          <NavBar/>
        </header>
        <ItemList/>
        <div><ItemList2/></div>
        <div className='ProductSection'>
          <CardComponent color= {greyColor} />
          <CardComponent color= {lightblueColor} />
          <CardComponent color= {lightgreenColor} />
        </div>
    </div>

  );
}

export default App;

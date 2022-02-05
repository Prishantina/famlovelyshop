import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar.js';
import imagen from './Components/logo-fam/logo.png';
import CardComponent from './Components/CardComponent/CardComponent';
import ItemList from './Components/itemListContainer';
import ItemList2 from './Components/ItemList2';
import ItemDetail from './Components/ItemDetailContainer/ItemDetail';

const greyColor = "grey";
const lightblueColor = "lightblue";
const lightgreenColor = "lightgreen";

function App() {
       const [data, setData] = useState({});
       const [isLoading, setIsLoading] = useState(true);
       useEffect(() => {
         axios('https://api.nasa.gov/planetary/apod?api_key=iqhNacca41ZTXcqaxxXeDhpzL7VMUPrTVtHwzrav').then((res) => setData(res.data));
         setTimeout(() => {
           setIsLoading(false)
         } , 2000)
       }, []);
  return (
    <div className="App">
        <header className="App-header">
{         <img src={imagen} alt='logo-fam' width="220px" height="auto" /> }
          <NavBar/>
        </header>
        <ItemList/>
        <div>
          {isLoading ? <p>Is Loading...</p> : <ItemDetail data={data}/>}
        </div>
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

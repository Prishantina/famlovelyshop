import './App.css';
import Header from './Components/HeaderComponent/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Views/Home';
import Productos from './Views/Productos';
import Contacto from './Views/Contacto';
import ItemDetail from './Views/ItemDetail';
import NavBar from './Components/Navigation/NavBar';
import Footer from './Components/Footer/Footer';

const App =()=> {
  return (
     <Router>
        <div className="App">
            <Header/>
            <NavBar />
        </div>

        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Productos" element={<Productos/>}/>
         <Route path="/Contacto" element={<Contacto/>}/>
         <Route path='/detail/:id' element={<ItemDetail/>}/>
       </Routes>
       <Footer/>
 
    </Router>
   
  );
}

export default App;

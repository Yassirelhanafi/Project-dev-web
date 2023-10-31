import './App.css';
import { Formulaire } from "./screens/Formulaire";
import {CV} from "./screens/CV"
import {Routes,Route,NavLink} from "react-router-dom";
function App() {
  return (
    <div className='container mt-10 bg-state-500'>
      <nav className="flex justify">
        <NavLink className="mr-3 block bg-neutral-700 mt-2 px-2 text-white rounded-full p-2" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/" >Cv philip </NavLink><br></br>
        <NavLink className="mr-3 block bg-neutral-700 mt-2 px-2 text-white rounded-full p-2 " style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/Formulaire"> Ajouter votre CV </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={ <CV/>}/>
        <Route path="/Formulaire" element={ <Formulaire/> } />
      </Routes>
    </div>
      
  );
}

export default App;

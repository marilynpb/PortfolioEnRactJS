import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import SeccionContacto from "./components/SeccionContacto";
import Home from "./components/Home";
import SeccionAbout from "./components/SeccionAbout";
import Portfolio from "./components/SeccionPortfolio";
import "./style/App.css"
import Foto from "./components/Foto";


function App() {
  return (
    <div className="App">
        <Navbar
        logo="Portfolio"
        menu1="Home" 
        menu2="Acerca de"
        menu3="Contacto"/>
        <Routes>
          <Route path="home" element={<App/>}></Route>
          <Route path="seccionAbout" element={<SeccionAbout/>}></Route>
          <Route path="seccionAbout" element={<Home/>}></Route>
          <Route path="SeccionPortfolio" element={<Portfolio/>}></Route>
          <Route path="contacto" element={<SeccionContacto/>}></Route>
        </Routes>
        <div className="izquierda">
          <Foto/>
        </div>

        <div className="derecha">
        <Home/>
        </div>
            
    </div>
  );
}

export default App;

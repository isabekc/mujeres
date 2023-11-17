import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import Loja from './Loja';
import Contato from './Contato';
import PaginaInicial from './PaginaInicial';
import RedesSociais from './RedesSociais';
import gate from './imagens/gate.jpg'
function App(){
  return(
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Página Inicial</Link>
            </li>
            <li>
              <Link to="/loja">loja</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
          <div className="logo">Petshop</div>
          <RedesSociais/>
        </nav>


        <header>
          <img src={gate}></img>
        </header>


        <Routes>
          <Route path="/loja" element={<Loja/>}>
          </Route>
          <Route path="/contato" element={<Contato/>}>
          </Route>
          <Route path="/" element={<PaginaInicial/>}>
       
          </Route>
          </Routes>
      </div>
    </Router>
  );
}




export default App;

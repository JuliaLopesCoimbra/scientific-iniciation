import Header from "./header/index.jsx";
import Home from "./home/index.jsx";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pesquisa from "./pesquisa/index.jsx";
import Sobre from "./sobre/index.jsx";
import Problema from "./pesquisa/problema/index.jsx";
import Footer from "./footer/index.jsx";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


        
function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes> {/* Envolver as rotas com o componente Routes */}
          <Route path="/home" exact element={<Home />} /> {/* Usar 'element' em vez de 'component' */}
          <Route path="/" exact element={<Home />} /> {/* Usar 'element' em vez de 'component' */}
          <Route path="/pesquisa" element={<Pesquisa />} /> {/* Usar 'element' em vez de 'component' */}
          <Route path="/sobre" element={<Sobre />} /> {/* Usar 'element' em vez de 'component' */}
          <Route path="/problema" element={<Problema />} /> {/* Usar 'element' em vez de 'component' */}
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;

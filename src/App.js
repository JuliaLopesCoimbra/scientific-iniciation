import Header from "./header/index.jsx";
import Home from "./home/index.jsx";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pesquisa from "./pesquisa/index.jsx";
import Sobre from "./sobre/index.jsx";
import Problema from "./pesquisa/problema/index.jsx";
import Footer from "./footer/index.jsx";
import Bibliografico from "./pesquisa/bibliografico/index.jsx";
import GPT from "./pesquisa/bibliografico/gpt.jsx";
import Turing from "./pesquisa/bibliografico/turing.jsx";
import Decisao from "./pesquisa/bibliografico/decisao.jsx";
import Objetivo from "./pesquisa/objetivo/index.jsx";
import Metodologia from "./pesquisa/metodologia/index.jsx";
import Coleta from "./pesquisa/coleta/index.jsx";
import Analise from "./pesquisa/analise/index.jsx";
import Conclusao from "./pesquisa/conclusao/index.jsx";
import Contato from "./contato/index.jsx";
import Publicacao from "./publicacao/index.jsx";
import Aprenda from "./aprenda/index.jsx";
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
          <Route path="/bibliografico" element={<Bibliografico/>} />
          <Route path="/bibliografico/gpt" element={<GPT/>} />
          <Route path="/bibliografico/decisao" element={<Decisao/>} />
          <Route path="/bibliografico/turing" element={<Turing/>} />
          <Route path="/objetivo" element={<Objetivo/>} />
          <Route path="/metodologia" element={<Metodologia/>} />
          <Route path="/coleta" element={<Coleta/>} />
          <Route path="/analise" element={<Analise/>} />
         
          <Route path="/conclusao" element={<Conclusao/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/publicacoes" element={<Publicacao/>} />
          <Route path="/aprenda" element={<Aprenda/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;

/*
enviar email

 */

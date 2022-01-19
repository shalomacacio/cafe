import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading=" Escolha o seu favorito !" />
      </Router>
    </>
  );
}

export default App;

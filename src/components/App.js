import React from 'react';
import { BackgroundStyled } from './Background/BGD';
import * as M from './MainText/MainTxt';
import NavBar from './Nav/NavBar';
import coffee from './images/coffee.png';
import bread from './images/bread.png';
import Form from './Form/Form';
import Footer from './Nav/Footer';

function App() {
  return (
    <>     
    <NavBar />
    <BackgroundStyled> 
      <M.H1>
        <h3>Conheça o restaurante mais verde da cidade</h3>
        <p>Lorem ipsum facilisis tortor quisque porttitor scelerisque nunc
          venenatis velit nam, curabitur integer neque metus vehicula
          enim accumsan ipsum, vestibulum non auctor aenean suscipit
          vivamus risus. mi porttitor sem quam justo vehicula suspendisse
        </p>
      </M.H1>      
      <img src={coffee} className="ic" align="right" alt="coffeeimage"/> 
    </BackgroundStyled>
    <BackgroundStyled>
      <img src={bread} className="ic2" align="right" alt="breadimage"/>
      <M.H2>
        <h3>Nosso cardápio</h3>
        <p>Lorem ipsum facilisis tortor quisque porttitor scelerisque nunc
          venenatis velit nam, curabitur integer neque metus vehicula
          enim accumsan ipsum, vestibulum non auctor aenean suscipit
          vivamus risus. mi porttitor sem quam justo vehicula suspendisse
        </p>
        <button className="card">ABRIR O CARDÁPIO</button>
      </M.H2>      
    </BackgroundStyled>
    <BackgroundStyled>
      <Form />
    </BackgroundStyled>
    <Footer />
    </>
  );
}

export default App;

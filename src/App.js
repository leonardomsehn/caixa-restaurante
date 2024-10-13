import React, { useState } from 'react'; // Adicionei o useState aqui
import './App.css';
import ItemForm from './componentes/ItemForm.js';
import TotalBill from './componentes/TotalBill.js';

import hamburguerImg from './componentes/assets/hamburguer.png';
import batataImg from './componentes/assets/batatafrita.png';
import refriImg from './componentes/assets/refri.png';
import aguaImg from './componentes/assets/agua.png';



function App() {
  const [quantidadeHamburguer, setQuantidadeHamburguer] = useState(0);
  const [quantidadeRefrigerante, setQuantidadeRefrigerante] = useState(0);
  const [quantidadeBatata, setQuantidadeBatata] = useState(0);
  const [quantidadeAgua, setQuantidadeAgua] = useState(0);
  const [quantidadePessoas, setQuantidadePessoas] = useState(1);

  const precoHamburguer = 25.00;
  const precoRefrigerante = 6.00;
  const precoBatata = 10.00;
  const precoAgua = 4.00;

  // Manipular state do hamburguer
  const aumentarHamburguer = () => setQuantidadeHamburguer(quantidadeHamburguer + 1);
  const diminuirHamburguer = () => {
    if (quantidadeHamburguer > 0) setQuantidadeHamburguer(quantidadeHamburguer - 1);
  };

  // Manipular state do refrigerante
  const aumentarRefrigerante = () => setQuantidadeRefrigerante(quantidadeRefrigerante + 1);
  const diminuirRefrigerante = () => {
    if (quantidadeRefrigerante > 0) setQuantidadeRefrigerante(quantidadeRefrigerante - 1);
  };

  // Manipular state da batata
  const aumentarBatata = () => setQuantidadeBatata(quantidadeBatata + 1);
  const diminuirBatata = () => {
    if (quantidadeBatata > 0) setQuantidadeBatata(quantidadeBatata - 1);
  };

  // Manipular state do agua
  const aumentarAgua = () => setQuantidadeAgua(quantidadeAgua + 1);
  const diminuirAgua = () => {
    if (quantidadeAgua > 0) setQuantidadeAgua(quantidadeAgua - 1);
  };

  const total = (quantidadeHamburguer * precoHamburguer) + (quantidadeRefrigerante * precoRefrigerante) + (quantidadeBatata * precoBatata) + (quantidadeAgua * precoAgua);

  const perPerson = total / quantidadePessoas;
  return (
    <div className="App">
      <div className="Titulo">
        <h1>Caixa</h1>
      </div>
      <div className="Cards">
        <ItemForm
          image={hamburguerImg}
          title="Hamburguer"
          content="Delicioso hamburguer com queijo e bacon."
          price="25.00"
          quantity={quantidadeHamburguer}
          onIncrease={aumentarHamburguer}
          onDecrease={diminuirHamburguer}
        />
        <ItemForm
          image={batataImg}
          title="Batatas Fritas"
          content="Porção de batatas fritas crocantes."
          price="10.00"
          quantity={quantidadeBatata}
          onIncrease={aumentarBatata}
          onDecrease={diminuirBatata}
        />
        <ItemForm
          image={refriImg}
          title="Refrigerante"
          content="Refrigerante lata gelado de 350ml."
          price="6.00"
          quantity={quantidadeRefrigerante}
          onIncrease={aumentarRefrigerante}
          onDecrease={diminuirRefrigerante}
        />
        <ItemForm
          image={aguaImg}
          title="Água"
          content="Garrafa de água da pedra 500ml."
          price="4.00"
          quantity={quantidadeAgua}
          onIncrease={aumentarAgua}
          onDecrease={diminuirAgua}
        />

      </div>

      {/* CRIAR INPUT */}
      <div className="Input">
        <label htmlFor="people">Dividir a conta entre quantas pessoas?</label>
        <input
          id="people"
          type="number"
          value={quantidadePessoas}
          min="1"
          onChange={(e) => {
            const valor = parseInt(e.target.value);
            if (valor >= 1) {
              setQuantidadePessoas(valor);
            } else {
              alert("O número de pessoas deve ser no mínimo 1!");
            }
          }}
        />
      </div>

      <div className="Bill">
        <TotalBill
          total={total.toFixed(2)}
          people={quantidadePessoas}
          perPerson={perPerson.toFixed(2)}
        />
      </div>
    </div >
  );
}

export default App;
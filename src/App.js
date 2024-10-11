import React, { useState } from 'react'; // Adicionei o useState aqui
import './App.css';
import ItemForm from './componentes/ItemForm.js';
import TotalBill from './componentes/TotalBill.js';

function App() {
  const [quantidadeHamburguer, setQuantidadeHamburguer] = useState(1);
  const [quantidadeRefrigerante, setQuantidadeRefrigerante] = useState(1);
  const [quantidadeBatata, setQuantidadeBatata] = useState(1);
  const [quantidadePessoas, setQuantidadePessoas] = useState(1);

  const precoHamburguer = 25.00;
  const precoRefrigerante = 5.00;
  const precoBatata = 10.00;

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

  const total = (quantidadeHamburguer * precoHamburguer) + (quantidadeRefrigerante + precoRefrigerante) + (quantidadeBatata + precoBatata);

  const perPerson = total / people;
  return (
    <div className="App">
      <ItemForm
        image="https://via.placeholder.com/150"
        title="Hamburguer"
        content="Delicioso hamburguer com queijo e bacon."
        price="25.00"
        quantity={quantidadeHamburguer}
        onIncrease={aumentarHamburguer}
        onDecrease={diminuirHamburguer}
      />
      <ItemForm
        image="https://via.placeholder.com/150"
        title="Refrigerante"
        content="Refrescante coca-cola gelada de 350ml."
        price="5.00"
        quantity={quantidadeRefrigerante}
        onIncrease={aumentarRefrigerante}
        onDecrease={diminuirRefrigerante}
      />
      <ItemForm
        image="https://via.placeholder.com/150"
        title="Batatas Fritas"
        content="Porção de batatas fritas crocantes."
        price="10.00"
        quantity={quantidadeBatata}
        onIncrease={aumentarBatata}
        onDecrease={diminuirBatata}
      />

      {/* CRIAR INPUT */}

      <TotalBill
        total={total.toFixed(2)} // Formatar o valor total para ter 2 casas decimais
        people={people}
        perPerson={perPerson.toFixed(2)} // Formatar o valor por pessoa para ter 2 casas decimais
      />
    </div>
  );
}

export default App;

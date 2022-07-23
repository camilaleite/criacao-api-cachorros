import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 1.5vw;
    padding:0;
    background-color:#ADFF2F;
    color: black;
  }`;

export default function DogsAPI() {
  const [dog, setDog] = useState([]);
  function DogLista() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      setDog(response.data.message);
    });
  }

  return (
    <div className="caixa-geral">
      <GlobalStyle />
      <h1>Lar Amigão</h1>
      <button
        className="botão"
        onClick={() => {
          DogLista();
        }}
      >
        Escolha seu amigão
      </button>
      <div className="containerpets">
        <img className="pets" src={dog} alt="cachorrinhos" />
      </div>
    </div>
  );
}

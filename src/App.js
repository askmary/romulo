import React from "react";
import "./styles.css";
import Foto from "./img/foto";

export default class App extends React.Component {
  state = {
    nome: "Luccas Correa",
    idade: 20,
    comida: "farofinha de bacon",
    musicas: ["Bonekinha", "Guren no Yumiya", "Tive Razão"]
  };
  render() {
    return (
      <div>
        <h1>
          Fala pessoal, meu nome é {this.state.nome}, seja bem-vindo ao meu
          canal!
        </h1>
        <h2>Tenho {this.state.idade} anos, clique em se inscrever!</h2>
        <h3>E minha comida favorita é {this.state.comida}!</h3>
        <ol>
          <li>{this.state.musicas[0]}</li>
          <li className="item">{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ol>
        <figure>
          <a href="https://www.google.com/search?q=tomate&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjS-_KU8fD4AhXDqpUCHdUWCNoQ_AUoAXoECAIQAw&biw=1366&bih=649&dpr=1#imgrc=9505AX09Ee2jTM">
            <img src={Foto} alt="tomate" />
          </a>
        </figure>
      </div>
    );
  }
}

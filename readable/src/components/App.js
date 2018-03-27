import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Categories from './Categories'
import '../css/App.css'

/*

TODO:
deve listar todas as categorias disponíveis, que devem se conectar a uma view de categoria para esta categoria
deve listar todas as postagens ordenadas pelo voteScore (começando pela pontuação mais alta)
deve ter um controle para modificar o método de ordenação da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por data de criação
deve ter um controle para adicionar novas postagens

 */

class App extends Component {
  render() {
    return (
      <div>

        <Categories />

        <Route exact path="/" render={() => (
          <ul>
            <li>Udacity is the best place to learn React</li>
            <li>Learn Redux in 10 minutes!</li>
          </ul>
        )}/>

      </div>
    );
  }
}

export default App;

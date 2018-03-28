import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Categories from './Categories'
import Posts from './Posts'
import '../css/App.css'

/*

Há três tipos de objetos armazenados no servidor: Categories, Posts, Comments

TODO:
Views:
Pardrão (Root):
- deve listar todas as categorias disponíveis, que devem se conectar a uma view de categoria para esta categoria
- deve listar todas as postagens ordenadas pelo voteScore (começando pela pontuação mais alta)
- deve ter um controle para modificar o método de ordenação da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por data de criação
- deve ter um controle para adicionar novas postagens

 */

class App extends Component {
  render() {
    return (
      <div>

        <Categories />

        <Route exact path="/" render={() => (
          <Posts />
        )}/>

      </div>
    );
  }
}

export default App;

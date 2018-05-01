import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { getAllCategories, getAllPosts } from '../actions'
import NavBar from './NavBar'
import Filter from './Filter'
import Posts from './Posts'
import CategoryView from './CategoryView'
import '../css/App.css'

/*

Há três tipos de objetos armazenados no servidor: Categories, Posts, Comments

TODO:
Views:
Pardrão (Root):
- ( OK ) deve listar todas as categorias disponíveis, que devem se conectar a uma view de categoria para esta categoria
- (OK) deve listar todas as postagens ordenadas pelo voteScore (começando pela pontuação mais alta)
- (OK) deve ter um controle para modificar o método de ordenação da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por data de criação
- deve ter um controle para adicionar novas postagens

 */

class App extends Component {
  componentDidMount() {
    this.props.getAllPosts()
    this.props.getAllCategories()
  }

  render() {
    return (
      <div>
        <NavBar />
        <Filter />
        <Switch>
          <Route exact path="/" component={Posts}/>
          <Route exact path="/:category" component={CategoryView} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({categories, posts}) {
    return {
        categories,
        posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
      getAllCategories: () => dispatch(getAllCategories()),
      getAllPosts: () => dispatch(getAllPosts())
    }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))

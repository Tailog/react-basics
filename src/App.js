import React from 'react';

import {CardList} from './components/card-list/CardList'

import './App.css';
import { Search } from './components/search/Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "Pierre",
          id: 25
        },
        {
          name: "Jo",
          id: 26
        },
        {
          name: "Ayse",
          id: 27
        }
      ],
      searchField : '',
    };
  }
  /**
   * Faire une requête à une API grâce à https://jsonplaceholder.typicode.com/
   * Sans Axios => fonction de javascript de base
   * componentDidMount est disponible car nous sommes dans un composant de type class
  **/
  componentDidMount(){
    //Fetch les datas
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(
        // On transforme la réponse de l'API en JSON
        (response) => response.json()
      )
      .then(
        //On met à jour le state avec le tableau reçu du JSON
        (users => this.setState((prevState)=>{
          return {
            // Je créer un nouveaux tableaux contenant tout les élément de mon state précedent et du tableau d'user reçu
            users: [...prevState.users,...users]
          }
        }))
      );
  }

  // Rendu Dynamique avec la méthode map
  // Ajout de Children Props dans le composants CardList
  render() {
    /**
    * Décompostion, autre facon d'écrire
    * const users = this.state.users
    * const searchField = this.state.searchField
    **/
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user)=>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <Search 
          placeholder="Search User"
          handleChange = {(e)=>this.setState({searchField: e.target.value})}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;

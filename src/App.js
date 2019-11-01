import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "Pierre",
          id: 1
        },
        {
          name: "Jo",
          id: 2
        },
        {
          name: "Ayse",
          id: 3
        }
      ]
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
  render() {
    return (
      <div>
        {this.state.users.map(user => {
          return <h1 key={user.id}>{user.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;

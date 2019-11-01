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

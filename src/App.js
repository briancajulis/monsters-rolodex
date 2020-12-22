import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()) // Fetch response and convert it to json
      .then((users) => this.setState({ monsters: users })); // set monsters to the users from response
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return <h1 key={`${monster.id}`}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;

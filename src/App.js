import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: '145zsd',
        },
        {
          name: 'Dracula',
          id: '167zsd',
        },
        {
          name: 'Zombie',
          id: '555zsd',
        },
      ],
    };
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

import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };

    // One way of allowing functions to access the context
    // this.onSearchBoxChange = this.onSearchBoxChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()) // Fetch response and convert it to json
      .then((users) => this.setState({ monsters: users })); // set monsters to the users from response
  }

  // Arrow function automatically binds to the context
  onSearchBoxChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      // finds the searchField phrase in the monster's name
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className='App'>
        <SearchBox onSearchBoxChange={this.onSearchBoxChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

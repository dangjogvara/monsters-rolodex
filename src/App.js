import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: uuidv4(),
        },
        {
          name: 'Dracula',
          id: uuidv4(),
        },
        {
          name: 'Zombie',
          id: uuidv4(),
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;

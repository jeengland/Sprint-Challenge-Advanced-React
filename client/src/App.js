import React from 'react';
import axios from 'axios';

import PlayerList from './components/PlayerList'

import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then((response) => this.setState({ data: response.data }))
      .catch((error) => console.error(error))
  }
  render() {
    return (
      <PlayerList data={this.state.data}/>
    )
  }
}

export default App;

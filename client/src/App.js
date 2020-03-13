import React from 'react';
import axios from 'axios';

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
  }
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

export default App;

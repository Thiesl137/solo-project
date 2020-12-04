import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

  render() {
    return (
      <div class='app'>
        <MainContainer />
      </div>
    );
  }
}

export default App;
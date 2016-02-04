import React, { Component } from 'react';
import { Nav, MediaIcons } from '../components';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <MediaIcons />
      </div>
    );
  }
}

export default App;

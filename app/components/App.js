import React, { Component } from 'react';
import { Nav, MediaIcons } from '../components';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Nav />
        <MediaIcons />
      </div>
    );
  }
}

export default App;

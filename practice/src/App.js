import React, { Component } from 'react';
import './App.css';
import Example from './Example';
import Example2 from './Example2';
import {Example3} from './Example3';

class App extends Component {
  

  render () {
    
    return(
    <div className="App">
      
      <Example />
      
      <Example2 />

      <Example3 />
      
    </div>)
  };
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Example from './Example';
import Example2 from './Example2';
import {Example3} from './Example3';
import Hello from './Hello';


class App extends Component {
  

  render () {
    
    return(
    <div className="App">
      
      <Example name="Bruce"/>
      
      <Example2 name="Mike"/>

      <Example3 name="Dave"/>

      <Hello name="Debbie"/>

    </div>)
  };
}

export default App;

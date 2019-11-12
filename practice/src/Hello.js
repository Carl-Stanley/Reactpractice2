import React from 'react';

const Hello = () => {
  //  return (
  //  <div><h1>Hello!</h1></div>
  //  )
    return React.createElement('div',{id: 'Hello', class: 'dummyClass'},React.createElement('h1',null,'Hello from create element!'));


}
// Rewitten in JSX ^


export default Hello;


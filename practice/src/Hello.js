import React from 'react';

const Hello = (props) => {
  //  return (
  //  <div><h1>Hello!</h1></div>
  //  )
  // written in JSX ^

    return React.createElement('div',{id: 'Hello', className: 'dummyClass'},
    React.createElement('h1',null,`Hello from create ${props.name}!`));

// Not written in JSX ^
}



export default Hello;




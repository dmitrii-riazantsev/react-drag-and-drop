import React from 'react';
import { render } from 'react-dom';
import Root from './components/root';


// (async () => 
// {
//     console.log('You have async support if you read this instead of "ReferenceError: regeneratorRuntime is not defined" error.');
// })();

render(<Root/>, document.getElementById('application-content'));



// const root = document.createElement('div');
// document.body.appendChild(root);
// render(<Root/>, root
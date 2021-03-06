import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import TodoApp from './todo-app/App';
//import MemeApp from './meme-generator/App';
//import JoshTest from './josh-test/App';
//import App from './Joke/App';
import App from './apis/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

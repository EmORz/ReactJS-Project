import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClassApp from './ClassApp'
//import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(( 
    <ClassApp name={"Emanuil1"}/>
),
  document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// ReactDOM.render((
//   <Router>
//       <App />
//   </Router>), document.getElementById('root'));
// registerServiceWorker();

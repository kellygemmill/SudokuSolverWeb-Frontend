import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './components/App';

ReactDOM.render(<App />,  document.getElementById('root')
);

setTimeout(function () {
    window.location.replace('http://sudoku.kellygemmill.com'); 
 }, 2000);




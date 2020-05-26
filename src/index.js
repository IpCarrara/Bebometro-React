import React from 'react'
import ReactDOM from 'react-dom'
import "../node_modules/jquery/dist/jquery.min.js";
import 'bootstrap/dist/css/bootstrap.css'

import "bootstrap/js/src/collapse.js";



import App from './components/App.js'
import style from "./components/style.css"


ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


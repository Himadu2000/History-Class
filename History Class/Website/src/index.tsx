import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//Added
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Index Data/index.css";
import { Router } from "react-router-dom";
import registerServiceWorker from "./Index Data/registerServiceWorker";
import Routes from "./components/Routes/Routes";
const history = require("history").createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
      <Routes />
    </Router>,
    document.getElementById("root")
  );
  
  registerServiceWorker();
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

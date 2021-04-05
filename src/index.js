import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Starships from './Starships';
import Vehicles from './Vehicles';
import DataPopulate from './DataPopulate';
import Welcome from './Welcome';
ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
    <Router>
      <App>
      <Route exact path="/" component={Welcome}/>  
      <Route exact path="/starships" component={Starships}/>  
      <Route exact path="/vehicles" component={Vehicles}/>   
      <Route exact path="/populate" component={DataPopulate}/>
  
      </App>
    </Router>
    </React.StrictMode>
    </StateProvider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

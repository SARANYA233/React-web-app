/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


import React from 'react'
import{BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navigation from './nav'
import AddData from './AddData'
import ShowData from './showData'
import "./style.css"

const App = () => {
    return (
        <>
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={AddData}></Route>
                <Route path="/show" component={ShowData}></Route>
            </Switch>
        </Router>


        </>
    )
}

export default App












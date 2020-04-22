import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "./components/Home"
// import RestaurentDetail from "./components/RestaurentDetail"
import RestaurentList from "./components/RestaurentList"
import RestaurentCreate from "./components/RestaurentCreate"
import RestaurentSearch from './components/RestaurentSearch';
import RestaurentUpdate from './components/RestaurentUpdate';


function App() {
  return (
    <div className="App">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand">React js</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link"><Link to="/">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link to="/list">list</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <Route path="/">
          <Home />
        </Route>  
        <Route path="/list">
          <RestaurentList />
        </Route>
        <Route path="/create">
          <RestaurentCreate />
        </Route>  
        <Route path="/update/:id"
          render={props=>(
            <RestaurentUpdate {...props} />
          )}
        >
        </Route>  

        <Route path="/search">
          <RestaurentSearch />
        </Route>  
      </Router>
    </div> 
  );
}

export default App;

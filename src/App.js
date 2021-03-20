import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateModule from "./components/create-module.component";
import EditModule from "./components/edit-module.component";
import ModuleList from "./components/modules-list.component";
import DeleteModule from "./components/delete-module.component";

import logo from "./logo1.jpg";
class App extends Component{
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">
              <img src={logo} width="200" height="100" alt=""/>
            </a>
            <Link to="/" className="navbar-brand">Course App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Modules</Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">Create Module</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={ModuleList} />
          <Route path="/edit/:id" component={EditModule} />
          <Route path="/create" component={CreateModule} />
          <Route path="/delete/:id" component={DeleteModule} />
        </div>
      </Router>
    );
  }
}

export default App;

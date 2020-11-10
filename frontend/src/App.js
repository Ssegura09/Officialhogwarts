import React, { Component } from "react";
import "./App.css";
import {BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Games from './components/Games'
const URLBase = "http://localhost:3000/users/";

class App extends Component {
  state = {
    allUsers: [],
    name: '',
    showLogin: true
  };

  componentDidMount() {
    fetch(URLBase)
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          allUsers: user,
        });
      });
  }

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul className="Nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/components/games">Games</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/components/games">
            <Games/>
            </Route>
            <Route path="/login">
              <Login name={this.handleLogin} />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

{
  /* <Route path="/login/" component={Login}/>
<Route path="/signup/" component={SignUp}/>
<Route path="/sortinghat/" component={SortingHat}/> */
}

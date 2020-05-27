import React, { Fragment } from "react";
// import Layout from "./Components/Layout.jsx";
// import Appbar2 from './Components/Appbar2.jsx';
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Premieres from "./Components/Premieres.jsx";
import Series from "./Components/Series.jsx";
import Movies from "./Components/Movies.jsx";
import MyFavourites from "./Components/MyFavourites.jsx";
import Profile from "./Components/Profile.jsx";
import Login from "./Components/Login.jsx";
import CreateAccount from "./Components/CreateAccount.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Premieres">
            <Premieres />
          </Route>
          <Route path="/Series">
            <Series />
          </Route>
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/MyFavourites">
            <MyFavourites />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/CreateAccount">
            <CreateAccount />
          </Route>
          
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

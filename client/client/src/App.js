// import logo from './logo.svg';
import "./App.css";
import { Redirect, Router, Link } from "@reach/router";

import Techs from "./views/Techs";
import SingleTech from "./views/SingleTech";

function App() {
  return (
    <div className="App">
      <Link to="/techs">All Tech</Link>
      <Router>
        <Techs path="techs" />
        <SingleTech path="techs/:id" />
        <Redirect from="/" to="/techs" noThrow />
      </Router>
    </div>
  );
}

export default App;

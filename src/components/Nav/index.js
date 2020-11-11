import React from "react";
import "./styles.css";
import Form from "../Form";
import RetrieveData from "../RetrieveData";
import Chat from "../Chat";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Router>
        <div>
          <Link to="/">
            <button className="btnNav" href="#">
              Apply for programme
            </button>
          </Link>

          <Link to="/matchmaker">
            <button className="btnNav" href="#">
              {/* {" "} */}
              Find Your Match
            </button>
          </Link>

          <Link to="/chat">
            <button className="btnNav" href="#">
              Chat
            </button>
          </Link>
          <Switch>
            <Route path="/matchmaker">
              <RetrieveData />
            </Route>

            <Route path="/chat">
              <Chat />
            </Route>

            <Route path="/">
              <Form />
            </Route>
          </Switch>
        </div>
      </Router>
    </nav>
  );
}

export default Navbar;

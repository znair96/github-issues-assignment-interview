import React, { Component } from "react";
import OpenIssueList from "../components/OpenIssueList";
import ClosedIssueList from "../components/ClosedIssuesList";
// import IssuesList from "./IssuesList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Issues extends Component {
  render() {
    return (
      <div className="container bg-light pl-3">
        <h3 style={{ position: "relative" }} className="pt-3">
          <i className="fal fa-info-circle"></i> Issues {""}
          <span
            className="badge rounded-pill bg-info text-dark"
            style={{
              fontSize: 14,
              position: "absolute",
              top: 22,
              marginLeft: 6,
            }}
          >
            {this.props.openissues.length}
          </span>
        </h3>
        <Router>
          <div
            className=" container mt-4 pt-2 pb-2 border border-bottom-2 border-light"
            style={{
              width: "95.8%",
              backgroundColor: "#E3E9F5",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <div className="d-flex">
              <Link
                style={{ textDecoration: "none", fontSize: "14px" }}
                to="/"
                id="open"
              >
                <i className="far fa-scrubber px-2"></i>Open
              </Link>
              <Link
                className="ml-2"
                to="/closed"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "14px",
                }}
                id="closed"
              >
                <i className="far fa-check px-2"></i>Closed
              </Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <OpenIssueList openissues={this.props.openissues} />
            </Route>
            <Route exact path="/closed">
              <ClosedIssueList closedissues={this.props.closedissues} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

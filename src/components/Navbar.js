import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="bg-dark" style={{ height: 48 }}>
        <ul
          className="container"
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <li>
            <i
              className="fas fa-list"
              style={{ color: "white", fontSize: 28, paddingTop: 8 }}
            ></i>
          </li>
          <li>
            <i
              className="fab fa-github"
              style={{ color: "white", fontSize: 28, paddingTop: 8 }}
            ></i>
          </li>
          <li>
            <i
              className="far fa-bell"
              style={{ color: "white", fontSize: 28, paddingTop: 8 }}
            ></i>
          </li>
        </ul>
      </nav>
    );
  }
}

import React, { Component } from "react";

export default class RepoStats extends Component {
  render() {
    return (
      <div className="container d-flex flex-row justify-content-between align-items-stretch">
        <div>
          <h3 className="my-4">
            <i class="fas fa-book"></i> octocat / Hello World
          </h3>
        </div>
        <div className="d-flex flex-row align-items-baseline my-3">
          <p
            className="mx-2 p-2"
            style={{ border: "1px solid black", borderRadius: 3 }}
          >
            <i class="far fa-eye"></i> Watch 1.9k
          </p>
          <p
            className="mx-2 p-2"
            style={{ border: "1px solid black", borderRadius: 3 }}
          >
            <i class="far fa-star"></i> Star 80k
          </p>
          <p
            className="mx-2 p-2"
            style={{ border: "1px solid black", borderRadius: 3 }}
          >
            <i class="far fa-code-branch"></i> Fork 19.4k
          </p>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class RepoStats extends Component {
  render() {
    return (
      <div className="container d-flex flex-row justify-content-between align-items-stretch">
        <div>
          <h3 className="my-4">
            <i className="fas fa-book"></i> {this.props.repoinfo.full_name}
          </h3>
        </div>
        <div className="d-flex flex-row align-items-baseline my-3">
          <p
            className="mx-2 p-2"
            style={{ border: "1px solid black", borderRadius: 3 }}
          >
            <i className="far fa-eye"></i> Watch{" "}
            {this.props.repoinfo.watchers_count}
          </p>
          <p
            className="mx-2 p-2"
            style={{ border: "1px solid black", borderRadius: 3 }}
            onClick={() => {
              this.props.deleteHandle();
            }}
          >
            <i className="far fa-star" id="star"></i> Star{" "}
            {this.props.repoinfo.stargazers_count}
          </p>
          <p
            className="mx-2 p-2"
            style={{ border: "1px solid black", borderRadius: 3 }}
          >
            <i className="far fa-code-branch"></i> Fork{" "}
            {this.props.repoinfo.forks_count}
          </p>
        </div>
      </div>
    );
  }
}

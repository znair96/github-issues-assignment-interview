import React, { Component } from "react";

export default class Issues extends Component {
  render() {
    return (
      <div className="container">
        <h3>
          <i class="fal fa-info-circle"></i> Issues{" "}
          <span
            style={{
              fontSize: 18,
              backgroundColor: "lightblue",
              borderRadius: "50%",
              padding: 2,
            }}
          >
            30
          </span>
        </h3>
        <div className="my-4">
          <div className="d-flex">
            <p className="mx-4 text-primary">
              <i class="far fa-scrubber px-2"></i>Open
            </p>
            <p>
              <i class="far fa-check px-2"></i>Closed
            </p>
          </div>
        </div>
      </div>
    );
  }
}

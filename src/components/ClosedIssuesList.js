import React, { Component } from "react";

export default class ClosedIssuesList extends Component {
  render() {
    return (
      <div className="container">
        {/* {(document.getElementById("open").style.color = "black")} */}
        {/* {(document.getElementById("closed").style.color = "blue")} */}
        {this.props.closedissues.map((issue) => {
          return (
            <div
              className="border border-2 border-light mx-3 border-start-0 border-top-0 border-end-0"
              style={{
                backgroundColor: "#E3E9F5",
              }}
              key={issue.id}
            >
              <strong>
                <i className="far fa-check px-2"></i>
                {issue.title}
              </strong>
              <div className="d-flex mt-2 mx-2">
                <p style={{ marginLeft: 4 }}>#{issue.number}</p>
                <p style={{ marginLeft: 6 }}>
                  Created on :- {issue.created_at}
                </p>
                <p style={{ marginLeft: 6 }}>
                  Updated on :- {issue.updated_at}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

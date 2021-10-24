import React, { Component } from "react";

export default class OpenIssueList extends Component {
  render() {
    // console.log(this.props.openIssues);
    return (
      <div className="container">
        {/* {(document.getElementById("open").style.color = "blue")} */}
        {/* {(document.getElementById("closed").style.color = "black")} */}
        {this.props.openissues.map((issue) => {
          return (
            <div
              className="border border-2 border-light mx-3 border-start-0 border-top-0 border-end-0 p-2"
              style={{
                backgroundColor: "#E3E9F5",
              }}
              key={issue.id}
            >
              <strong>
                <i
                  className="far fa-scrubber px-2"
                  style={{ color: "green" }}
                ></i>
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

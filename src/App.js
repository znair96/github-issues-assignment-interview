import axios from "axios";
import React from "react";
import Issues from "./components/Issues";
import Navbar from "./components/Navbar";
import RepoStats from "./components/RepoStats";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      openIssues: [],
      closedIssues: [],
      repoInfo: {},
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/repos/octocat/hello-worId/issues")
      .then((response) => {
        // console.log(response.data);
        this.setState({
          openIssues: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "https://api.github.com/repos/octocat/hello-worId/issues?state=closed"
      )
      .then((response) => {
        // console.log(response.data);
        let openIssues = this.state.openIssues;
        let total = openIssues.concat(response.data);
        this.setState({
          closedIssues: response.data,
          issues: total,
        });
      });
    axios.get("https://api.github.com/users/octocat/repos").then((response) => {
      const arr = response.data;
      arr.forEach((repo) => {
        if (repo.name === "hello-worId") {
          this.setState({
            repoInfo: repo,
          });
        }
      });
    });
  }
  render() {
    const starTheIssue = () => {
      let starId = document.getElementById("star");
      if (starId.classList.contains("far", "fa-star")) {
        starId.classList.remove("far", "fa-star");
        starId.classList.add("fas", "fa-star");
        let obj = this.state.repoInfo;
        console.log(obj);
        obj.stargazers_count += 1;
        console.log(obj);
        this.setState({
          repoInfo: obj,
        });
      } else {
        starId.classList.remove("fas", "fa-star");
        starId.classList.add("far", "fa-star");
        let obj = this.state.repoInfo;
        obj.stargazers_count -= 1;
        this.setState({
          repoInfo: obj,
        });
      }
    };
    return (
      <div className="App">
        <Navbar />
        <RepoStats repoinfo={this.state.repoInfo} deleteHandle={starTheIssue} />
        <Issues
          issues={this.state.issues}
          openissues={this.state.openIssues}
          closedissues={this.state.closedIssues}
        />
      </div>
    );
  }
}

export default App;

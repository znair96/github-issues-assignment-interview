import Issues from "./components/Issues";
import Navbar from "./components/Navbar";
import RepoStats from "./components/RepoStats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RepoStats />
      <Issues />
    </div>
  );
}

export default App;

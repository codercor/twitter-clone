import "./App.css";

//import HomeStream from "./components/HomeStream";

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="container">
      <Sidebar />{" "}
      <div className="stream">Bunun sidebar yanında olması gerek</div>
    </div>
  );
}

export default App;

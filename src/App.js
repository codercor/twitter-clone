import "./App.css";

import HomeStream from "./components/HomeStream";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
function App() {
  return (<Router>
    <div className="container">
      <Sidebar />{" "}
      <div className="main">
        <Switch>
          <Route exact path='/home'>
            <HomeStream />
          </Route>
          <Route exact path='/'>
            <HomeStream />
          </Route>
          <Route exact path="/explore">
            <h1>Explore</h1>
          </Route>

          <Route exact path="/notifications">
            <h1> notifications</h1>
          </Route>

          <Route exact path="/messages">
            <h1> messages</h1>
          </Route>
          <Route exact path="/i/bookmarks">
            <h1> bookmarks</h1>
          </Route>  <Route exact path="/:username">
            <h1> profile </h1>
          </Route>
          <Route exact path="/:username/lists">
            <h1> lists</h1>
          </Route>

        </Switch>
      </div>
    </div></Router>
  );
}

export default App;

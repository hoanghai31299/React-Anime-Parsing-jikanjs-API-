import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import Stats from "./components/Stats";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  const [anime, setAnime] = useState(21);
  return (
    <Router>
      <div className="App">
        <Header anime={anime} onChoose={(id) => setAnime(id)} />
        <Switch>
          <Route path="/characters" exact>
            <HeroSec anime={anime} />
          </Route>
          <Route path="/" exact>
            <Stats anime={anime} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

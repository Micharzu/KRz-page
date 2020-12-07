import React from "react";
import "./app-styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Navigation/Nav";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Band from "./components/Band/Band";
import Gallery from "./components/Gallery/Gallery";
import Multimedia from "./components/Multimedia/Multimedia";
import Sheets from "./components/Sheets/Sheets";
import RSZ from "./components/RSZ/RSZ";
import Contact from "./components/Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="content">
          <div className="component">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/aktualnosci" component={News} />
              <Route path="/zespol-zak" component={Band} />
              <Route path="/galeria" component={Gallery} />
              <Route path="/multimedia" component={Multimedia} />
              <Route path="/nuty" component={Sheets} />
              <Route path="/rodzinne-studio-zak" component={RSZ} />
              <Route path="/kontakt" component={Contact} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

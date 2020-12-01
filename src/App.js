import "./app-styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Navigation/Nav";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Band from "./components/Band/Band";
import Gallery from "./components/Gallery/Gallery";
import Multimedia from "./components/Multimedia/Multimedia";
import Sheets from "./components/Sheets/Sheets";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="component">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aktualnosci" component={News} />
            <Route path="/zespol" component={Band} />
            <Route path="/galeria" component={Gallery} />
            <Route path="/multimedia" component={Multimedia} />
            <Route path="/nuty" component={Sheets} />
            <Route path="/kontakt" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

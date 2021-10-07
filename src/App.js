import { Route, Switch } from "react-router-dom";
import "./App.css";
import ContactUs from "./Components/ContactUs/ContactUs";
import Events from "./Components/Events/Events";
import Family from "./Components/Family/Family";
import Gallery from "./Components/Gallery/Gallery";
import Home from "./Components/Home/Home";
import OurWedding from "./Components/OurWedding/OurWedding";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/wedding">
          <OurWedding></OurWedding>
        </Route>
        <Route path="/family">
          <Family></Family>
        </Route>
        <Route path="/events">
          <Events></Events>
        </Route>
        <Route path="/gallery">
          <Gallery></Gallery>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

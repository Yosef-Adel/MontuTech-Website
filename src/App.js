import Nav from "./components/Nav";
import {Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" exact> 
            <Home/>
        </Route>
        <Route path="/about"> 
            <About/>
        </Route>
        <Route path="/contact"> 
            <ContactUs/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

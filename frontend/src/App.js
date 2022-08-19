import { useEffect } from 'react';
import './App.css';
import Header from './components/Home/Header';
import Home from './components/Home/Home';
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductDetails from './components/Products/ProductDetails';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka", "Segoe Script"]
      }
    });
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/product/:id"} component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header';
import Home from './components/Home/Home';
import WebFont from "webfontloader";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka", "Segoe Script"]
      }
    });
  }, [])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

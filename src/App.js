import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
      <Router>
        <div className="app">
          <Routes>
            <Route path='/checkout' element = {[<Header />, <h1>I am a checkout page</h1>]} />
            <Route path='/' element = {[<Header />, <Home />]} />           {/* Gets rendered out everytime rather the path is not specified */}
          </Routes>
        </div>
      </Router>
  );
}

export default App;

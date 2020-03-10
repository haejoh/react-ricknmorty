import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail'
import About from './components/About/About'
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom';

function App() {
  const navStyle = {
      backgroundColor:'#e3f2fd',
      boxShadow: '0px 0px 16px 2px #000000'
  }
  return (
    <div className='App'>
      <Router>
      <div>
      {/* NAVIGATION */}
      <nav class="navbar navbar-expand-lg navbar-light" style={navStyle}>

      {/* BURGER BUTTON */}
      <button class="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span role='img' aria-label="Burger">🍔</span> {/* <!-- Best button btw --> */}
      </button>

      {/* COLLAPSABLE NAV LINKS */}
      <div class="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
      
        <ul class="navbar-nav mr-auto mx-auto">
          <li class="nav-item nav-center">
            <Link to='/' className="nav-link">Home</Link>
          </li>
          <li class="nav-item nav-center">
            <Link to='/about' className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
        <Switch>
          <Route exact path="/" component={CharacterList}/>
          <Route path="/about" component={About}/>
          <Route path="/character/:id" component={CharacterDetail}/>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

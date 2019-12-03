import React from 'react';
import './assets/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './components/pages/home-page';
import Shop from './components/pages/shop';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />

      <Footer />
    </div>
    </Router>
  );
}

export default App;

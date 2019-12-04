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
import Home from './pages/home-page';
import Shop from './pages/shop';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;

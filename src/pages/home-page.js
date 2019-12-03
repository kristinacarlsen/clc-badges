import React, { Component } from 'react';
import './pages.css';
import CLC from './page-images/CLC.png';

class Home extends Component {
    render() {
        return (
            <div className="home-page">
               <img src={CLC} alt=""/>
            </div>
        )
    }
}

export default Home;
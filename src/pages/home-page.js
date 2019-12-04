import React, { Component } from 'react';
import '../assets/pages.css';
import CLC from '../images/CLC.png';

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
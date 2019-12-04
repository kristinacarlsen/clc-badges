import React, { Component } from 'react';

// images
import CandyCane from '../cards/CandyCane';
import Penguin from '../cards/Penguin';
import Poinsettia from '../cards/Poinsettia';
import Spider from '../cards/Spider';
import TreeB from '../cards/TreeB';
import Turkey from '../cards/Turkey';


class Shop extends Component {
    render() {
        return (
            <div className="container">

            <h1 className='title'>Christmas Collection</h1>

                <div className="row">
                    
                    <Penguin />

                    <CandyCane />

                    <TreeB />


                </div>

                <div className="row">
                    
                    <Poinsettia />


                    <Spider />

                    <Turkey />

                </div>
            </div>
        
        )
    }
}

export default Shop;
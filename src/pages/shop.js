import React, { Component } from 'react';

// images
import Candycane from './page-images/candycane.jpg';
import Penguin from './page-images/penguin.jpg';
import Poinsettia from './page-images/poinsettia.jpg';
import TreeA from './page-images/treeA.jpg';
import TreeB from './page-images/treeB.jpg';
import Spider from './page-images/spider.jpg';
import Turkey from './page-images/turkey.jpg';


class Shop extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    
                    <div className="col">

                        <div className="card">
                            <img className="penguin" src={Penguin} alt=""/>
                            <p className="price">Penguin Badge $10</p>
                        </div>
                    
                    </div>

                    <div className="col">

                    <div className="card">
                        <img className='penguin' src={TreeA} alt=""/>
                        <p className="price">Poinsettia Badge $10</p>
                    </div>
                
                </div>

                <div className="col">

                <div className="card">
                    <img src={Candycane} alt=""/>
                    <p className="price">Candy Cane Badge $10</p>
                </div>
            
            </div>

                </div>

                <div className="row">
                    
                    <div className="col">

                        <div className="card">
                            <img className="penguin" src={TreeB} alt=""/>
                            <p className="price">Penguin Badge $10</p>
                        </div>
                    
                    </div>

                    <div className="col">

                    <div className="card">
                        <img src={Poinsettia} alt=""/>
                        <p className="price">Poinsettia Badge $10</p>
                    </div>
                
                </div>

                <div className="col">

                <div className="card">
                    <img className='penguin' src={Turkey} alt=""/>
                    <p className="price">Candy Cane Badge $10</p>
                </div>
            
            </div>

                </div>
            </div>
        
        )
    }
}

export default Shop;
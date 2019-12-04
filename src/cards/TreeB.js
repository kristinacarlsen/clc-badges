import React, { Component } from "react";
import Tree from "../images/treeB.jpg";
import '../assets/pages.css';

const TreeB = () => (  
    <div className="col">
    <div className="card">
      <img className='penguin' src={Tree} alt="" />
      <p className="price">Christmas Tree Badge $10</p>
    </div>
  </div>
  );
export default TreeB;
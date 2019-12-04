import React, { Component } from "react";
import Penguin1 from "../images/penguin.jpg";
import '../assets/pages.css';

const Penguin = () => (  
    <div className="col">
    <div className="card">
      <img className='penguin' src={Penguin1} alt="" />
      <p className="price">Penguin Badge $10</p>
    </div>
  </div>
  );
export default Penguin;
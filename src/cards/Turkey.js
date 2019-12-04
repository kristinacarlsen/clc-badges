import React, { Component } from "react";
import TurkeyA from "../images/turkey.jpg";
import '../assets/pages.css';

const Turkey = () => (  
    <div className="col">
    <div className="card">
      <img className='penguin' src={TurkeyA} alt="" />
      <p className="price">Turkey Badge $10</p>
    </div>
  </div>
  );
export default Turkey;
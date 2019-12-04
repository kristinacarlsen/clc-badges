import React, { Component } from "react";
import SpiderA from "../images/spider.jpg";
import '../assets/pages.css';

const Spider = () => (  
    <div className="col">
    <div className="card">
      <img className='penguin' src={SpiderA} alt="" />
      <p className="price">Spider Badge $10</p>
    </div>
  </div>
  );
export default Spider;
import React from "react";
import PoinsettiaA from "../images/poinsettia.jpg";
import '../assets/pages.css';

const Poinsettia = () => (  
    <div className="col">
    <div className="card">
      <img className='penguin' src={PoinsettiaA} alt="" />
      <p className="price">Poinsettia Badge $10</p>
    </div>
  </div>
  );
export default Poinsettia;
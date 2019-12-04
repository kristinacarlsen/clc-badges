import React from "react";
import Candycane from "../images/candycane.jpg";
import '../assets/pages.css';

const CandyCane = () => (  
    <div className="col">
    <div className="card">
      <img src={Candycane} alt="" />
      <p className="price">Candy Cane Badge $10</p>
    </div>
  </div>
  );
export default CandyCane;
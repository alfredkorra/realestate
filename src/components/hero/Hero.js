import React from "react";
import "./hero.css";
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find the perfect place</h1>
        <p className="search-text">
          Search the largest selection of luxyry high-rise apartments,
          multi-family homes and luxyry homes.
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Enter Keyword..." />
          </div>
          <div className="radio">
            <input type="radio" checked />
            <label>Buy</label>
            <input type="radio" />
            <label>Rent</label>
            <button type="submit"><AiOutlineSearch className="icon" /></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;

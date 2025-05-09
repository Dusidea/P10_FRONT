import "../styles/main.css";
import { useState } from "react";

export default function Feature({ title, children, logo }) {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={logo} alt="icon"></img>
      <h3 className="feature-item-title"> {title}</h3>
      {children}
    </div>
  );
}

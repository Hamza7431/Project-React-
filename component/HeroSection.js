import React from "react";
import "./HeroSection.css";
// import "../../App.css";
export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/video/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for </p>
      <div className="hero-btn">
        <button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get started
        </button>
        <button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <i className="far fa-play-circle"></i>
        </button>
      </div>
    </div>
  );
}

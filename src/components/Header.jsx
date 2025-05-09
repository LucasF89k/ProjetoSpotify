import React from "react";
import logoSpotify from "../assets/assets/logo/spotify-logo.png";

export const Header = () => {
  return (
    <div className="header">
      <img src={logoSpotify} alt="Logo do Spotify" />

      <a className="header_link" href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;

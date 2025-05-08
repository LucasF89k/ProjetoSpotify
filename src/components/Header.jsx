import React from "react";
import logoSpotify from "../assets/assets/logo/spotify-logo.png";

export const Header = () => {
  return (
    <div>
      <img src={logoSpotify} alt="Logo do Spotify" />

      <a href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;

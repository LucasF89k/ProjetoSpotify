import React from "react";
import Player from "../components/Player";
import { Link } from "react-router-dom";

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e0278a62cd11c719962d1d36aba"
            alt="Imagem da Musica X"
          />
        </div>
      </div>

      <div className="song__bar">
        <Link to="/artist/1" className="song__artist-image">
          <img
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab67616100005174acfec0b96ba96562ad2e7fa3"
            alt="Imagem do Artista Y"
          />
        </Link>

        <Player />

        <div>
          <p className="song__name">Mala dos Porta-Mala - Ao Vivo</p>
          <p>Murilo Huff</p>
        </div>
      </div>
    </div>
  );
};

export default Song;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const SingleItem = ({ id, name, image, banner, artist }) => {
  return (
    <div className="single-item">
      <div className="single-item__div-image-button ">
        <div className="single-item__div-image">
          <img
            className="single-item__image "
            src={image}
            alt={`Imagem do Artista ${name}`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>
      <div className="single-item__texts ">
        <p className="single-item__title ">{name}</p>
        <p className="single-item__type ">
          {artist === undefined ? "Artista" : artist}
        </p>
      </div>
    </div>
  );
};

export default SingleItem;

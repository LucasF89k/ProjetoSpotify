import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/assets/database/artists";
import { songsArray } from "../assets/assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {/*Intem List de Artista*/}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={8}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/*Intem List de Músicas*/}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Main;

import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/assets/database/artists";
import { songsArray } from "../assets/assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/*Intem List de Artista*/}
      <ItemList
        title="Artistas"
        items={5}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      {/*Intem List de Músicas*/}
      <ItemList
        title="Músicas"
        items={10}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};
export default Main;

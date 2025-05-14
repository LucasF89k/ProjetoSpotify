import React from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  return (
    <div className="song-list">
      {songsArray.map((currentSongObj, index) => (
        <SongItem {...currentSongObj} index={index} key={index} />
      ))}
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />

      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};

export default SongList;

import React, { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  const handleSeeMore = () => {
    setItems((prevItems) => prevItems + 5);
  };

  const hasMoreItems = items < songsArray.length;

  return (
    <div className="song-list">
      {songsArray.slice(0, items).map((currentSongObj, index) => (
        <SongItem {...currentSongObj} index={index} key={index} />
      ))}

      {hasMoreItems && (
        <p className="song-list__see-more" onClick={handleSeeMore}>
          Ver mais
        </p>
      )}
    </div>
  );
};

export default SongList;

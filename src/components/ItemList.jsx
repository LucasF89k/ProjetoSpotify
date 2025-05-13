import React from "react";
import SingleItem from "./SingleItem";
import { artistArray } from "../assets/assets/database/artists";
import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(items);
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares</h2>
        <Link to={path} className="item-list_link">
          Mostrar Tudo
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem
              // id={currObj.id}
              //name={currObj.name}
              // image={currObj.image}
              //banner={currObj.banner}
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;

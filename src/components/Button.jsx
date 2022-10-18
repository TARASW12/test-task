import React from "react";
import { useEffect } from "react";
import clas from "../styles/Button.module.css";
import { UseMenuContext } from "./Content";
const Button = () => {
  const key = "Gd3ImJ5EYfc-ZeQvtjw-DXA45ozm3QIzybUG6h-_oYc";
  const { setter } = UseMenuContext();
  const { searchList } = UseMenuContext();
  const fetchPhotos = async () => {
    // const url = 'https://jsonplaceholder.typicode.com/photos?_start=10&_limit=10';
    const url = `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_KEYS}&count=8&query=${searchList}`;
    if (searchList.length > 3) {
      const response = await fetch(url);
      const data = await response.json();

      setter(data);
    }
  };

  return (
    <div>
      <button className={clas.btn} onClick={() => fetchPhotos()}>
        Search
      </button>
    </div>
  );
};
export default Button;

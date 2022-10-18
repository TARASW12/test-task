import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import clas from "../styles/Button.module.css";
import { UseMenuContext } from "./Content";
const Button = () => {
  const key = "Gd3ImJ5EYfc-ZeQvtjw-DXA45ozm3QIzybUG6h-_oYc";
  const { setter } = UseMenuContext();
  const { searchList } = UseMenuContext();
const {setLoading} = UseMenuContext()


  const fetchPhotos = async () => {
   const url = `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_KEYS}&count=8&query=${searchList}`;
   {
      setLoading(true)
      const response = await fetch(url);
      const data = await response.json();

      setter(data);
      
    }
    setLoading(false)
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

import React from "react";
import { UseMenuContext } from "./Content";
import clas from "../styles/Content.module.css";
import Loader from "./Loader";
const Contents = () => {
  const { photos } = UseMenuContext();
const {loading} = UseMenuContext()
  return (
    <div>
      {loading ? <Loader/> 
      :    <div className={clas.container}>
      {photos.map((item) => (
        <img  className={clas.img} src={item.urls.regular}></img>
      ))}
    </div>}
  
    </div>
  );
};
export default Contents;

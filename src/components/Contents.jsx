import React from "react";
import { useState } from "react";
import { UseMenuContext } from "./Content";
import clas from '../styles/Content.module.css'
const Contents = () => {
   const {photos} = UseMenuContext()
console.log(photos)
    return(
        <div>
            <div className={clas.container}>{photos.map(item => <img className={clas.img} src={item.urls.regular}></img>)}</div>
        </div>
    )
}
export default Contents
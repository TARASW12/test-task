import React, { useEffect, useState } from "react";
import clas from "../styles/Input.module.css";
import { UseMenuContext } from "./Content";
const Input = () => {
  const { setSerchList } = UseMenuContext();

  return (
    <div>
      <input
        onChange={(e) => setSerchList(e.target.value)}
        className={clas.input}
        type="text"
        placeholder="Find your pictures..."
      ></input>
    </div>
  );
};

export default Input;

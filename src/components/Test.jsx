import React from "react";
import axios from 'axios'
import { useState } from "react";
const Test = () => {
    const key = 'Gd3ImJ5EYfc-ZeQvtjw-DXA45ozm3QIzybUG6h-_oYc'
   const [value, setVlaue] = useState([])
// const fetchPhotos = async () => {
//     const url = `https://api.unsplash.com/photos/random?client_id=${key}&count=4`;
//     const response = await fetch(url);
//     const data = await response.json();
 
// }

const fetchPhotoss = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos?_start=10&_limit=10';
    const response = await fetch(url);
    const data = await response.json();
 console.log(data)
 setVlaue(data)
}


console.log(value)
return (
    <div>
<button onClick={() => fetchPhotoss()}  >123</button>
{value.map(item => <img src={item.thumbnailUrl}></img>)}
{/* <image src="https://via.placeholder.com/150/197d29"></image> */}
    </div>
)
}

export default Test
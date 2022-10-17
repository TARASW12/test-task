import React, { useContext, useState } from "react";

const MenuContext = React.createContext()

export const UseMenuContext = () => useContext(MenuContext)

export const MenuProvider = ({children}) => {
    const [searchList, setSerchList] = useState([])
    console.log(searchList)
    const [photos, setPhotos] = useState([])
    const setter = (photo) => setPhotos(photo)
    const set = (search) => setSerchList(search)
    return(
        <MenuContext.Provider value={{searchList, photos, setter, setSerchList}}>
{children}
        </MenuContext.Provider>
    )
}
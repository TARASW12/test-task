import React, { useContext, useState } from "react";

const MenuContext = React.createContext()

export const UseMenuContext = () => useContext(MenuContext)

export const MenuProvider = ({ children }) => {
    const [searchList, setSerchList] = useState([])
    const [photos, setPhotos] = useState([])
    const setter = (photo) => setPhotos(photo)
    const [loading , setLoading] = useState(false)
    return (
        <MenuContext.Provider value={{ searchList, photos, setter, setSerchList, setLoading, loading }}>
            {children}
        </MenuContext.Provider>
    )
}
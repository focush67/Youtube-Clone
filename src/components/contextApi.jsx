import React from "react";
import { createContext,useState,useEffect } from "react";

import { fetchDataFromAPI } from "../utilities/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [load,setLoad] = useState(false);
    const [search,setSearch] = useState([]);
    const [selectCategory,setSelectCategory] = useState('New');
    const [mobileMenu,setMobileMenu] = useState(false);


    useEffect(() => {
        fetchSelectedCategoryData(selectCategory)
    },[selectCategory])


    const fetchSelectedCategoryData = (query) => {
        setLoad(true);
        fetchDataFromAPI(`search/?q=${query}`).then(({contents}) => {
            console.log(contents);
            setSearch(contents);
            setLoad(false);
        })
    }


    return (
        <Context.Provider value={
            {
                load,
                setLoad,
                search,
                setSearch,
                selectCategory,
                setSelectCategory,
                mobileMenu,
                setMobileMenu
            }
        }>
            {props.children}
        </Context.Provider>
    )
    
}
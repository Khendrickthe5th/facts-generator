import { useState} from "react";
import React from 'react';
import {List, Sun, Moon } from "@phosphor-icons/react"


function Navbar() {
     
    // This function handles the setting and updating of the page's icon
    const moonIcon = <Moon weight="fill" alt="Moon icon"className="sm:text-[45px] text-[30px]" />;
    const sunIcon = <Sun weight="fill" alt="Sun icon" color="white" className="sm:text-[45px] text-[30px]" />;


    const [icon, setIcon] = useState(moonIcon)
    const [theme, setTheme] = useState(true)

    const updateIcon = ()=>{
        if(theme){
            setTheme(false)
            setIcon(sunIcon)
            document.body.classList.add("dark")
        }
        else if(!theme){
            setTheme(true)
            setIcon(moonIcon)
            document.body.classList.remove("dark")
        }
    }

    return(
    <div className="w-[full] h-[70px] dark:bg-black flex justify-center">
        <div className="w-[85%] h-[100%] flex justify-between items-end">
            <span onClick={updateIcon} className=" active:scale-[1.05]">{icon}</span>
            <span className=" active:scale-[1.05] ">
            <List weight="fill" className="dark:text-white sm:text-[45px] text-[30px]" alt="Hamburger icon"/>
            </span> 
            </div>
    </div>
    )
}

export default Navbar;
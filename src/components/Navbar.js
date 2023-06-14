import { useState, useRef } from "react";
import React from 'react';
import { List, Sun, Moon, XSquare } from "@phosphor-icons/react"


function Navbar() {
     
    const moonIcon = <Moon weight="bold" alt="Moon icon"className="sm:text-[45px] text-[30px]" />;
    const sunIcon = <Sun weight="bold" alt="Sun icon" color="white" className="sm:text-[41px] text-[26px]" />;

    // This function handles the setting and updating of the page's theme
    const [icon, setIcon] = useState(moonIcon)
    const [theme, setTheme] = useState(false)

    const updateIcon = ()=>{
        if(!theme){
            setTheme(true)
            setIcon(sunIcon)
            document.body.classList.add("dark")
        }
        else if(theme){
            setTheme(false)
            setIcon(moonIcon)
            document.body.classList.remove("dark")
        }
    }

        // This section handles the toggling of hiding and displaying of the side menu
        const HamIcon = <List weight="fill" className="dark:text-white sm:text-[45px] text-[30px]" alt="Hamburger icon"/>;
        const updateHam = ()=>{
            setDisplay.current.classList.remove("hidden")
        }
        const setDisplay = useRef();


    return(
    <div className="w-[full] h-[70px] dark:bg-transparent flex justify-center">
        <div className="w-[85%] h-[100%] flex justify-between items-end">
            <span onClick={updateIcon} className=" active:scale-[1.05]">{icon}</span>
            <span onClick={updateHam} className=" active:scale-[1.05] ">{HamIcon}</span> 
            </div>

            <div ref={setDisplay} className="w-[50%] h-[100%] sm:w-[35%] absolute right-0 hidden bg-white dark:bg-black z-[20] shadow-md shadow-black">
                <div className="w-[85%] sm:w-[80%] h-[100%]">
                    <span onClick={()=>{setDisplay.current.classList.add("hidden")}} className="w-[100%] h-[70px] flex items-end justify-end"><XSquare weight="bold" className="dark:text-white sm:text-[43px] text-[28px]"/></span>

                    <span onClick={()=>{alert("Feature coming soon!")}} className="w-[100%] h-[70px] flex justify-center items-end font-font1 font-semibold text-[13px] sm:text-[21px] dark:text-white"><a href={void 0}>Random Quotes</a></span>
                    
                    <span className="w-[100] h-[calc(100%-140px)] text-[10px] sm:text-[15px] font-font1 font-normal flex items-end justify-center pb-[20px] dark:text-white"><p>Made with 💖 by Ozoani Chidubem</p></span>
                </div>
            </div>
    </div>
    )
}

export default Navbar;
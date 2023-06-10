import hamburger from "../icons/hamburger.svg"
import moon from "../icons/moon.svg"

function Navbar() {
    return(
    <div className="w-[full] h-[70px] dark:bg:black flex justify-center">
        <div className="w-[85%] h-[100%] flex justify-between items-end">
            <span className="sm:w-[45px] sm:h-[45px] w-[30px] h-[30px] active:scale-[1.05]"><img src={moon} height="100" width="100" alt="moon icon" /></span>
            <span className="sm:w-[45px] sm:h-[45px] w-[30px] h-[30px] active:scale-[1.05]"><img src={hamburger} height="100" width="100" alt="hamburger icon" /></span>
        </div>
    </div>
    )
}

export default Navbar;
import axios from "axios";
import { useState} from "react";

function QuotesBar(){
    // const limit = 1;
    const [fact, setFact] = useState("Click to spur facts that will give you heavy Goosebumpsss🙈🤘")

    const getFact = ()=>{
        axios({
            method: "get",
            url: "https://api.api-ninjas.com/v1/facts?limit=1",
            headers: {'x-api-key': "y0/1+EwtLLUc5ewzOZo+Ug==TDHzUPKV4gBonwrl"},
            contentType: "application/json"

        })
        .then((res)=>{setFact(res.data[0].fact)})
        .catch((err)=>{console.log(err)})

    }

    return(
        <div className="w-[100%] h-[calc(100vh-70px)] flex justify-center items-center px-[40px] dark:bg-transparent">
            <div className="w-[750px] h-fit  z-[2]">
                <p className="sm:text-[30px] font-font1 text-[20px] font-bold dark:text-white select-none">{fact}</p>

                <div className="sm:w-[300px] w-[180px] h-fit flex justify-center items-center mx-auto mt-[50px]">
                    <div className="w-[200px] h-[3px] bg-black dark:bg-white"></div>
                    <div className="w-[10px] h-[10px] bg-black rounded-full shrink-0 m-[5px] dark:bg-white"></div>
                    <div className="w-[200px] h-[3px] bg-black dark:bg-white"></div>
                </div>

                <div onClick={getFact} className="w-[100%] h-fit mt-[50px] mx-auto flex justify-center items-center active:scale-[1.03]">
                    <div className="w-[150px] h-[40px] sm:w-[250px] sm:h-[70px] relative">
                    <div className="dark:bg-gradient-to-r from-[#6110DB] from-20% via-[#2F89BC] via-45% to-[#00FFA0] to-80% w-[100%] h-[100%] sm:text-[25px] bg-[#009688] text-white font-font1 font-bold flex justify-center items-center select-none">See New Fact
                    </div>
                    <div className="bg-[#009688] dark:bg-gradient-to-r from-[#6110DB] from-20% via-[#2F89BC] via-45% to-[#00FFA0] to-80% w-[100%] h-[100%] relative right-[7px] bottom-[33px] sm:right-[7px] sm:bottom-[63px] flex justify-center items-center z-[-1] ">
                        <div className="w-[calc(100%-6px)] h-[calc(100%-6px)] bg-white dark:bg-black"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuotesBar;
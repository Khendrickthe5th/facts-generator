function GlowElements(){
return(
    <div className="w-[100vw] h-[100vh] dark:bg-black absolute z-[-2] overflow-hidden hidden dark:block">
        <div className="w-[100%] h-[100%]">
            <div className="w-fit h-fit absolute left-[-100px] top-[-120px]">
                <div className="w-[300px] h-[300px] rounded-full bg-[#00FFA0] blur-3xl relative opacity-40"></div>
                <div className="w-[200px] h-[200px] rounded-full bg-[#6110DB] blur-3xl relative bottom-[300px] left-[100px] opacity-50"></div>
            </div>
            <div className="w-fit h-fit absolute left-[600px] top-[-270px]">
                <div className="w-[750px] h-[750px] rounded-full bg-[#00FFA0] blur-3xl relative opacity-40"></div>
                <div className="w-[600px] h-[600px] rounded-full bg-[#2F89BC] blur-3xl relative bottom-[800px] left-[200px] opacity-60"></div>
            </div>
            <div className="w-fit h-fit absolute left-[250px] top-[470px]">
                <div className="w-[300px] h-[300px] rounded-full bg-[#00FFA0] blur-3xl relative opacity-40"></div>
                <div className="w-[200px] h-[200px] rounded-full bg-[#6110DB] blur-3xl relative bottom-[200px] left-[100px] opacity-70"></div>
            </div>
            <div className="w-fit h-fit absolute left-[50px] top-[470px]">
                <div className="w-[100px] h-[100px] rounded-full bg-[#00FFA0] blur-3xl relative opacity-40"></div>
                <div className="w-[60px] h-[60px] rounded-full bg-[#6110DB] blur-3xl relative bottom-[100px] left-[100px] opacity-70"></div>
            </div>
            <div className="w-fit h-fit absolute left-[-50px] top-[770px]">
                <div className="w-[100px] h-[100px] rounded-full bg-[#00FFA0] blur-3xl relative opacity-40"></div>
                <div className="w-[60px] h-[60px] rounded-full bg-[#6110DB] blur-3xl relative bottom-[100px] left-[100px] opacity-70"></div>
            </div>
            <div className="w-fit h-fit absolute left-[1500px] top-[770px]">
                <div className="w-[900px] h-[900px] rounded-full bg-[#00FFA0] blur-[200px] relative opacity-40"></div>
                <div className="w-[700px] h-[700px] rounded-full bg-[#6110DB] blur-[200px] relative bottom-[600px] left-[200px] opacity-70"></div>
            </div>
        </div>
    </div>
)
}

export default GlowElements;
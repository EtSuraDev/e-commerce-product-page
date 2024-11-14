import { useState } from "react"


export default function Images(){
    let [display, setDisplay] = useState(0)
    let thumbnail = [
        "./images/image-product-1-thumbnail.jpg",
        "./images/image-product-2-thumbnail.jpg",
        "./images/image-product-3-thumbnail.jpg",
        "./images/image-product-4-thumbnail.jpg"
    ]
    // onClick={setDisplay(prev => prev > 0 ? prev -1 : 0)}
    // onClick={setDisplay(prev => prev < 3 ? prev + 1 : 3)}
    function click(num){
        if(num === 1){
            setDisplay(prev => prev < 3 ? prev + 1 : 3 )
        }else{
            setDisplay(prev => prev > 0 ? prev - 1 : 0)
        }
    }
    return(
        <div className="w-auto h-[300px]  md:w-[50%] md:min-w-[300px] md:min-h-[300px] block  md:max-w-[531px] md:h-[40%] md:pr-[52px]">
            <div className=" md:w-[100%] md:max-h-[444px] md:h-fit relative sm:min-w-[100%] h-[300px] md:min-w-[300px] md:min-h-[300px]">
                <button className={` bg-white absolute left-4 w-[40px] h-[40px]  flex justify-center items-center rounded-[50%] top-1/2 transform -translate-y-1/2 md:hidden ${display === 0 && "hidden"}`} onClick={() => click(-1)} >
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                    </svg>
                </button>
                <img src={`./images/image-product-${display + 1}.jpg`} alt="image-product-1-thumbnail" className="w-[100%] h-[300px] md:min-h-[380px] md:min-w-[300px] object-cover md:w-[93%]  md:h-[70%] md:rounded-2xl hover:cursor-pointer " />
                <button className={` bg-white absolute right-4 bottom-[50%]  w-[40px] h-[40px]  flex justify-center items-center rounded-[50%]  top-1/2 transform -translate-y-1/2 md:hidden ${display === 3 && "hidden"}`}onClick={() => click(1)} >
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                    </svg>
                </button>
            </div>
            <div className=" hidden md:flex w-full max-w-[445px] min-h-[52%] h-[5%] max-h-[83px] justify-between mt-[30px]">
                {
                    thumbnail.map((item, index) => {
                        return <img src={item} alt="" key={index} className={`min-h-[69px] max-h-[83px] w-[19%] h-[100%] rounded-md hover:cursor-pointer border-[hsl(26,100%,55%)] hover:blur-[2px] ${index === display && "border-4"} ` } onClick={() => setDisplay(index)}/>
                    })
                }
            </div>
        </div>
    )
} 
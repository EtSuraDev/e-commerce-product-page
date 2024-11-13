import PLusAndMinusBtn from "./plus-And-Minus-Btn";
import AddToCartBtn from "./Add-to-Cart-Btn";

  

export default function ContentAndPrice(props){
    return(
        <div className=" sm:p-[24px] md:py-[0px] md:w-[50%] md:max-w-[485px] md:px-[40px] lg:flex flex-col justify-around">
            <div>
                <div>
                    <h3 className=" mb-[16px] font-bold text-black opacity-[75%] text-[14px] ">
                        SNEAKER COMPANY
                    </h3>
                    <h2 className=" mb-[16px] font-bold text-3xl lg:text-[43px] lg:mb-[40px] ">
                        Fall Limited Edition Sneakers
                    </h2>
                    <p className=" mb-[17.6px]  text-black opacity-[75%] text-[15.5px]">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                </div>
                <div className=" flex items-center justify-between mb-[16px] lg:flex-col lg:items-start lg:mb-[37px]">
                    <div className=" flex items-center ">
                        <h1 className=" font-bold text-3xl mr-[20px] ">
                            $125.00
                        </h1>
                        <div className=" bg-black text-white w-[51px] h-[27px] flex items-center justify-center rounded-[5px] font-bold opacity-[75%]">
                            <p>50%</p>
                        </div>
                    </div>
                    
                    <p className=" font-bold opacity-[75%]"><del>250.00</del></p>
                </div>
                <div className=" lg:flex lg:items-center space-x-[16px]">
                    <PLusAndMinusBtn num={props.num} func={props.func} />
                    <AddToCartBtn func={props.addToCart}/>
                </div>
                
            </div>
        </div>
            
    )
}
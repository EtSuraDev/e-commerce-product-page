


export default function Cart(){
    let div = (
        <div>
            <div className="flex justify-between items-center mb-[21px]">
                <img src="./images/image-product-1-thumbnail.jpg" width={"50px"} height={"50px"} alt="" />
                <div>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <div className="flex space-x-[14px]">
                        <p>$125 x 4</p>
                        <p> $500 </p>
                    </div>
                </div>
                <img src="./images/icon-delete.svg" width={"14.5px"} height={"16.5px"} alt="" className=" cursor-pointer hover:h-[18px]" />
            </div>
            <button className=" w-[313px] h-[56px] p-[16px] bg-[hsl(26,100%,55%)] rounded-md">checkout</button>
        </div>
    )
    return(
        <div className=" w-[361px] h-[256px] bg-white py-[16px] px-[24px] z-50  shadow-2xl absolute top-[100px] right-[30px] rounded-xl hidden">
            <h1 className=" mb-[26.4px] w-full  text-[18px] font-bold ">cart</h1>
            <hr className="w-full mb-[26.4px]" />
            {div}
        </div>
    )
}
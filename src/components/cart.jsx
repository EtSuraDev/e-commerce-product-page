


export default function Cart(props){
    let display = (
        <div>
            <div className="flex justify-between items-center mb-[21px]">
                <img src="./images/image-product-1-thumbnail.jpg" width={"50px"} height={"50px"} alt="" />
                <div>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <div className="flex space-x-[14px]">
                        <p>$125 x {props.cartItems}</p>
                        <p> {props.totalPrice} </p>
                    </div>
                </div>
                <img src="./images/icon-delete.svg" width={"14.5px"} height={"16.5px"} onClick={() => props.func()} alt="" className=" cursor-pointer hover:h-[18px]" />
            </div>
            <button onClick={() => props.func()} className=" w-[313px] h-[56px] p-[16px] bg-[hsl(26,100%,55%)] rounded-md hover:opacity-[25%]">checkout</button>
        </div>
    )
    let hiden = (
        <div className=" flex justify-center items-center">
            <p>Your cart is empty</p>
        </div>
    )
    return(
        <div className={` w-[361px] h-[256px] bg-white py-[16px] px-[24px] z-50  shadow-2xl absolute top-[100px] right-[30px] rounded-xl ${props.displayCart ? "block" : "hidden"} `}>
            <h1 className=" mb-[26.4px] w-full  text-[18px] font-bold ">cart</h1>
            <hr className="w-full mb-[26.4px]" />
            {props.cartItems ? display : hiden}
        </div>
    )
}
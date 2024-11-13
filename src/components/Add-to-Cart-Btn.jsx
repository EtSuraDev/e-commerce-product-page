

export default function AddToCartBtn(props){
    return(
        <div className=" flex justify-center h-[56px] w-full bg-[hsl(26,100%,55%)]  rounded-[8px] items-center px-[26px] cursor-pointer mt-[16px] lg:m-0 hover:bg-[hsl(25,100%,94%)] " onClick={() => props.func()}>
                <img src="./images/icon-cart.svg" alt="" width={"14px"} height={"14px"}  className=" mr-[10px] fill-black"/>
                <p className=" text-sm font-bold">Add to Cart</p>
        </div>
    )
}
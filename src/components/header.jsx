import Menu from "./menu"
import Cart from "./cart"
import { useState } from "react"

export default function Header(props){
    let [displayCart, setDisplayCart] = useState(false)
    function changeDisplayCart(){
        setDisplayCart(prev => !prev)
    }
    let hideSection = ["Collections", "Men", "Women", "About", "Contact"]
    let hideSectionMap = hideSection.map((item, index) =>{
        return <a href={item} key={index} className=" mr-[32px] hover:mr-[30px] opacity-[75%] hidden md:block hover:opacity-[100%] hover:font-bold  ">{item}</a>
    })
    console.log(props.cartItems)
    return(
        <>
            <Cart displayCart={displayCart} cartItems={props.cartItems} totalPrice={props.totalPrice} func={props.onclickCheckoutOrDelBtn} />
            <div className=" flex px-[24px] pt-[17.6px] pb-[26.4px] h-[67.9px] items-center justify-between bg-white md:px-[24px] md:pt-[29px] md:pb-[32px] md:h-[113px]">
                <div className=" flex items-center">
                    <div className="drawer block">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            
                            <label htmlFor="my-drawer" className=""><Menu func={props.onclickMenu} /></label>
                        </div>
                        <div className="drawer-side z-50">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                {hideSection.map((item,index) => <li key={index}>{item}</li> )}
                            </ul>
                        </div>
                    </div>
                    <img src="./images/logo.svg" alt="" className="m-0 mr-[32px] md:mr-[32px] lg:mr-[52px] cursor-pointer " />
                    {hideSectionMap}
                </div>
                
                <div className=" flex items-center md:w-[120px] justify-between md:h-[50px] relative">
                    {
                        props.cartItems !== 0 &&  <div className=" bg-[hsl(26,100%,55%)] w-[19px] h-[19px] rounded-full text-white flex justify-center items-center font-bold absolute top-[30px] left-5">
                                                <p> {props.cartItems} </p>
                                            </div>
                    }
                    <img src="./images/icon-cart.svg" alt="" className="m-[16px] cursor-pointer" onClick={() => changeDisplayCart()} />
                    <img src="./images/image-avatar.png" alt="image-avatar" className=" w-[24px] h-[24px] cursor-pointer hover:border-[2px] hover:border-[hsl(26,100%,55%)] hover:rounded-[50%] md:w-[50px] md:h-[50px]" />
                </div>
                
            </div>
        </>
    )
}
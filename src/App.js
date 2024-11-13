
import Header from "./components/header";
import Images from "./components/img-section";
import ContentAndPrice from "./components/content-And-Price";
import SideBar from "./sideBar";
import Cart from "./components/cart";
import { useState } from "react";
function App() {
  let [items, setItems] = useState(0)
  let [cartItems, setCartItems] = useState(0)
  let price = 125
  let totalPrice = price * items
  console.log(cartItems)
  function onclickPlusOrMinusBtn(num){
    setItems(prev => {
      if(num === -1) return prev === 0 ? 0 : prev + num
      return prev + num
    })
  }
  function onclickAddToCartBtn(){
    console.log("checkd")
    setCartItems(prev => items)
  }
  return (
    <div className="App h-[772px] max-w-[1110px] m-auto relative">
      <header className=" max-w-[1110px] h-fit">
        <Header /> 
        <hr />
      </header>
      <Cart/>
      <div className=" flex flex-col md:flex-row max-w-[1110px] m-0 md:pt-[94.4px] md:pl-[48px]">
        <Images />
        <ContentAndPrice num={items} func={onclickPlusOrMinusBtn} addToCart={onclickAddToCartBtn}/>
      </div>
    </div>
  );
}

export default App;

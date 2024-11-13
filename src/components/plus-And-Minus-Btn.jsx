



export default function PLusAndMinusBtn(props){
    return(
        <div className=" flex justify-between h-[56px] w-full bg-[hsl(223,64%,98%)]  rounded-[8px] items-center px-[19px] lg:max-w-[153px]">
            <button onClick={() => props.func(-1)}>
                <img src="./images/icon-minus.svg" alt="" />
            </button>
            <p> {props.num} </p>
            <button onClick={() => props.func(1)}>
                <img src="./images/icon-plus.svg" alt="" />
            </button>
        </div>
    )
}
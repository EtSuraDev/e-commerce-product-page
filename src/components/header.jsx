import Menu from "./menu"


export default function Header(props){
    let hideSection = ["Collections", "Men", "Women", "About", "Contact"]
    let hideSectionMap = hideSection.map((item) =>{
        return <a href={item} className=" mr-[32px] hover:mr-[30px] opacity-[75%] hidden md:block hover:opacity-[100%] hover:font-bold  ">{item}</a>
    })
    return(
        <div className=" flex px-[24px] pt-[17.6px] pb-[26.4px] h-[67.9px] items-center justify-between bg-white md:px-[24px] md:pt-[29px] md:pb-[32px] md:h-[113px]">
            <div className=" flex items-center">
                <Menu func={props.onclickMenu} />
                <img src="./images/logo.svg" alt="" className="m-0 mr-[32px] md:mr-[32px] lg:mr-[52px] cursor-pointer " />
                {hideSectionMap}
            </div>
            
            <div className=" flex items-center md:w-[120px] justify-between md:h-[50px]">
                <img src="./images/icon-cart.svg" alt="" className="m-[16px] cursor-pointer" />
                <img src="./images/image-avatar.png" alt="image-avatar" className=" w-[24px] h-[24px] cursor-pointer hover:border-[2px] hover:border-[hsl(26,100%,55%)] hover:rounded-[50%] md:w-[50px] md:h-[50px]" />
            </div>
            
        </div>
    )
}
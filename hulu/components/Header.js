import Image from "next/image"
import HeaderItem from "./HeaderItem"
import
{
BadgeCheckIcon,
CollectionIcon,
HomeIcon,
LightningBoltIcon,
SearchIcon,
UserIcon,
} from "@heroicons/react/outline"

function Header() {
    const items = 
    [
        {   
            id:1,
            title:"Home",
            Icon:HomeIcon,
        },
        {   
            id:2,
            title:"Trending",
            Icon:LightningBoltIcon,
        },
        {   
            id:3,
            title:"Verified",
            Icon:BadgeCheckIcon,
        },
        {   
            id:4,
            title:"Collections",
            Icon:CollectionIcon,
        },
        {   
            id:5,
            title:"Search",
            Icon:SearchIcon,
        },
        {   
            id:6,
            title:"Account ",
            Icon:UserIcon,
        },
    ]
    return (

        <div className="flex flex-col sm:flex-row m-5 justify-between items-center md:justify-between h-auto ">
            <div className="flex flex-grow justify-evenly max-w-2xl ">
                {items.map((item,index) =>
                    <div 
                    key={index}>
                        <HeaderItem title={item.title} Icon={item.Icon}/>
                    </div>
                )}
            </div>

                <Image 
                    objectFit='contain'
                    src="https://links.papareact.com/ua6"
                    width={200} height={100} 
                />
        </div>
    )
}

export default Header

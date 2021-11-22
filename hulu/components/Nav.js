import { useRouter } from "next/dist/client/router"
import requests from "../utils/requests"

function Nav() {
    const router = useRouter()
    return (
        <nav className="relative">
            <div className="flex items-center justify-between px-10 sm:px-20text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(( [key,{title,url}] ) => 
                    <h2 onClick={() => router.push(`/?genre=${key}`)} key={key} className=" last:pr-24 cursor-pointer hover:scale-125 active:text-red-500 hover:text-white transition transform duration-150">{title}</h2>
                )}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-12 w-1/12"/>
        </nav>
    )
}

export default Nav

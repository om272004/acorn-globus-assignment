import { ChevronDown, Menu, Plus, Search } from "lucide-react";
import image from "../assets/image.jpg"

export function Header() {
    return <div className="p-4 flex">
        <div className="flex items-center">
            <h1 className="h-8 w-8 bg-black rounded-full flex justify-center items-center">
                <p className="text-white font-extrabold text-2xl">C</p>
            </h1>
            <p className="flex font-bold text-[15px] pl-14">Codename.com <ChevronDown /></p>
        </div>
        <div className="flex justify-between w-full items-center">
            <div className="flex ml-20 p-2 pl-4 w-3/8 bg-white rounded-full items-center text-sm text-[#969696] font-semibold">
                <Search size={18} />
                <input type="text" placeholder="Try searching &quot;insights&quot;" className="pl-4" />
            </div>

            <div className="flex pr-4 gap-x-4">
                <div className="flex items-center gap-x-3 bg-white p-1 rounded-full">
                    <Menu size={18} />
                    <img src={image} className="h-7 w-7 rounded-full"/>
                </div>

                <h1 className="h-10 w-10 bg-[#d72e58] rounded-full flex justify-center items-center">
                   <Plus color="white" strokeWidth={1} />
                </h1>
            </div>
        </div>
    </div>
}
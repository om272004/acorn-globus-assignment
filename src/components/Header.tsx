import { ChevronDown, Menu, Plus, Search } from "lucide-react";
import image from "../assets/image.jpg"

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
    return (
        <div className="p-4 flex flex-col gap-4 md:flex-row md:items-center justify-between shrink-0">
            
            <div className="flex items-center justify-between w-full md:w-auto">
                <div className="flex items-center">
                    <button onClick={onMenuClick} className="mr-4 lg:hidden p-2 bg-white rounded-full text-gray-600">
                        <Menu size={20} />
                    </button>

                    <h1 className="h-8 w-8 bg-black rounded-full flex justify-center items-center shrink-0">
                        <p className="text-white font-extrabold text-2xl">C</p>
                    </h1>
                    <p className="flex font-bold text-[15px] pl-4 md:pl-14 whitespace-nowrap">Codename.com <ChevronDown /></p>
                </div>
            </div>

            <div className="flex justify-between w-full items-center gap-x-4">
                <div className="flex flex-1 md:ml-20 p-2 pl-4 md:w-3/8 bg-white rounded-full items-center text-sm text-[#969696] font-semibold">
                    <Search size={18} />
                    <input type="text" placeholder="Try searching &quot;insights&quot;" className="pl-4 w-full h-full focus:outline-none bg-transparent" />
                </div>

                <div className="flex gap-x-2 md:gap-x-4 shrink-0">
                    <div className="hidden md:flex items-center gap-x-3 bg-white p-1 rounded-full">
                        <Menu size={18} />
                        <img src={image} className="h-7 w-7 rounded-full object-cover"/>
                    </div>

                    <h1 className="h-10 w-10 bg-[#d72e58] rounded-full flex justify-center items-center shadow-lg shadow-rose-200">
                       <Plus color="white" strokeWidth={1} />
                    </h1>
                </div>
            </div>
        </div>
    )
}
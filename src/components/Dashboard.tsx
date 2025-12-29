import { ArrowDown, ArrowUp, ArrowUpRight, ChevronDown, ChevronRight, ChevronsDown, ChevronsUp, ChevronUp, Download, Globe, ListFilter, Plus, ShoppingBag, Sliders, Star, TextAlignStart, Upload, type LucideIcon } from "lucide-react";
import { useState } from "react";
import image1 from "../assets/1.jpg"
import image2 from "../assets/2.jpg"
import image3 from "../assets/3.jpg"
import { BehanceIcon, DribbbleIcon, GlobeIcon, GoogleIcon, InstagramIcon } from "./Icons";


export function Dashboard() {
    const [on, setOn] = useState(false);
    type itemsType = {
        title: string,
        value: string,
        change: string,
        icon: LucideIcon,
        active: boolean
    }

    const items: itemsType[] = [
        { title: "Deals", value: "256", change: "5", icon: ChevronsDown, active: false },
        { title: "Value", value: "528k", change: "7.9%", icon: ChevronsUp, active: true },
        { title: "Win rate", value: "44%", change: "1.2%", icon: ChevronsUp, active: false },
    ]

    const details = [
        { img: image1, value: "209,633", percentage: 39.63 },
        { img: image3, value: "156,481", percentage: 29.65 },
        { img: image2, value: "117,115", percentage: 22.14 },
    ]

    const socialMediaSales = [
        { icon: DribbbleIcon, label: "Dribbble", sales: "$227,459", percentage: 43 },
        { icon: InstagramIcon, label: "Instagram", sales: "$142,823", percentage: 27 },
        { icon: BehanceIcon, label: "Behance", sales: "$89,935", percentage: 11 },
        { icon: GoogleIcon, label: "Google", sales: "$37,028", percentage: 7 },
    ]

    return <div className="h-full w-full bg-white rounded-3xl p-4">
        <div className="flex justify-between items-center">
            <div className="flex gap-x-2">
                <div className="flex justify-center items-center rounded-full border w-6 h-6 border-[#dcdada] cursor-pointer">
                    <Plus size={18} />
                </div>
                <div className="flex justify-center items-center rounded-full border px-1 pr-4 text-xs gap-x-2 font-semibold border-[#dcdada] cursor-pointer">
                    <img src={image1} className="h-4 w-4 rounded-full" />
                    <p className="text-xs">Armin A.</p>
                </div>
                <div className="flex justify-center items-center rounded-full border px-1 pr-4 text-xs gap-x-2 font-semibold border-[#dcdada] cursor-pointer">
                    <img src={image2} className="h-4 w-4 rounded-full" />
                    <p className="text-xs">Eren Y.</p>
                </div>
                <div className="flex justify-center items-center rounded-full border px-1 pr-4 text-xs gap-x-2 font-semibold border-[#dcdada] cursor-pointer">
                    <img src={image3} className="h-4 w-4 rounded-full" />
                    <p className="text-xs">Mikasa Y.</p>
                </div>
                <div className="flex justify-center items-center rounded-full border w-6 h-6 cursor-pointer">
                    <div className="bg-black rounded-full w-4 h-4 flex justify-center items-center border-[#dcdada]">
                        <p className="text-white font-bold text-xs">C</p>
                    </div>

                </div>

            </div>
            <div className="flex gap-x-2">
                <div className="border w-8 h-8 rounded-full flex items-center justify-center border-[#dcdada] cursor-pointer">
                    <Sliders size={18} />
                </div>
                <div className="border w-8 h-8 rounded-full flex items-center justify-center border-[#dcdada] cursor-pointer">
                    <Download size={18} />
                </div>
                <div className="border w-8 h-8 rounded-full flex items-center justify-center border-[#dcdada] cursor-pointer">
                    <Upload size={18} />
                </div>
            </div>
        </div>

        <div className="flex justify-between items-center py-4">
            <h1 className="text-3xl font-bold text-[#dcdada] tracking-tight">
                New report
            </h1>
            <div className="flex items-center">
                <button
                    onClick={() => setOn(!on)}
                    className={`w-9 h-5 flex items-center rounded-full px-0.5 transition ${on ? "bg-black" : "bg-gray-300"}`}
                >
                    <span
                        className={`h-4 w-4 bg-white rounded-full shadow transition ${on ? "translate-x-4" : "translate-x-0"}`}
                    />
                </button>

                <p className="font-semibold px-2 text-sm">
                    Timeframe
                </p>

                <div className="flex items-center py-1 px-3 bg-[#dcdada] text-xs rounded-full font-semibold">
                    <p className="pr-2">Sep 1 - Nov 30, 2023</p>
                    <ChevronDown strokeWidth={1.5} size={14} />
                </div>

            </div>
        </div>

        <div className="flex justify-between">
            <div className="flex flex-col gap-y-1">
                <h3 className="font-bold">Revenue</h3>
                <div className="flex gap-x-2">
                    <div className="flex text-4xl font-black">
                        <p>$528,976</p> <p className="text-[#dcdada]">.82</p>

                    </div>

                    <span className="flex justify-center items-center text-xs my-2 gap-x-0.5 rounded-full bg-[#d72e58] px-2 py-1 text-white"><ChevronsUp size={16} /> 7.9%</span>
                    <span className="flex justify-center items-center text-xs my-2 rounded-full bg-[#d72e58] px-2 py-1 text-white">$27,335.09</span>
                </div>
                <span className="flex items-center font-bold text-xs gap-x-2">
                    <p>vs prev. $501,641.73</p>
                    <p className="flex items-center">Jun 1 - Aug 31,2023 <ChevronDown size={14} /></p>
                </span>
            </div>

            <div className="flex">

                <div className="flex gap-x-2">
                    <div className="flex flex-col bg-white py-2 px-3 rounded-2xl border border-[#dcdada] w-36 gap-y-1 shadow-2xl cursor-pointer hover:border-2">
                        <p className="text-[#dcdada] text-xs font-semibold">Top sales</p>
                        <p className="font-extrabold">72</p>
                        <span className="flex justify-between items-center font-bold">
                            <span className="flex items-center text-xs font-bold gap-x-1">
                                <img src={image3} className="h-3 w-3 rounded-full" />
                                <p>Mikasa</p>
                            </span>

                            <ChevronRight size={12} className="bg-[#dcdada] rounded h-4 w-4 hover:bg-gray-400" />
                        </span>
                    </div>

                    <div className="flex flex-col bg-black py-2 px-3 rounded-2xl border border-[#dcdada] w-36 gap-y-1 shadow-2xl cursor-pointer hover:border-2">
                        <p className="flex justify-between items-center text-[#dcdada] text-xs font-semibold">Top sales <Star size={12} /></p>
                        <p className="font-extrabold text-white">$42,300</p>
                        <span className="flex justify-between items-center font-bold">
                            <span className="flex items-center text-xs font-bold gap-x-1">
                                <p className="text-white">Rolf Inc.</p>
                            </span>

                            <ChevronRight size={12} className="bg-white rounded h-4 w-4 hover:bg-[#dcdada]" />
                        </span>
                    </div>
                </div>

                <div className="flex gap-x-4 pl-4">
                    {items.map(item => <div className={`rounded-xl border py-2 px-2 flex flex-col items-center gap-y-2 w-18 shadow-lg
                        ${item.active ? "border-[#d72e58]" : "border-[#dcdada]"} hover:border-[#d72e58]`}>
                        <p className="text-black font-semibold text-xs">{item.title}</p>
                        <span className={`rounded-full text-xs text-white px-2 py-0.5
                            ${item.active ? "bg-[#d72e58]" : "bg-[#dcdada]"} hover:bg-[#d72e58]`}>{item.value}</span>
                        <span className="flex items-center text-xs font-semibold"><item.icon size={12} /> {item.change}</span>
                    </div>)}
                </div>

            </div>
        </div>


        <div className="flex justify-between py-4 gap-x-2">
            <div className="rounded-full bg-[#dcdada] w-full flex items-center px-0.5">
                <div className="flex flex-1 gap-x-1">
                    {details.map(item => <div className="py-2 px-1 rounded-full bg-white mx-0.5 flex justify-between text-xs" style={{ width: `${item.percentage}%` }}>
                        <div className="flex gap-x-2">
                            <img src={item.img} className="h-4 w-4 rounded-full" />
                            <p className="font-semibold">${item.value}</p>
                        </div>
                        <p className="font-semibold text-[#dcdada]">{item.percentage}%</p>
                    </div>)}

                    <div className="flex items-center justify-between text-xs pl-1 pr-2 gap-x-4 font-semibold">
                        <div className="flex gap-x-2">
                            <h1 className="h-5 w-5 bg-black rounded-full flex justify-center items-center">
                                <p className="text-white font-extrabold text-xs">C</p>
                            </h1>
                            <p className="flex items-center">$45,386</p>
                        </div>

                        <p className="flex items-center text-gray-500">8.58%</p>
                    </div>
                </div>
            </div>

            <div className="px-4 py-3 bg-black text-white rounded-full tracking-wider text-xs font-semibold hover:bg-[#333333] cursor-pointer transition-colors duration-300">
                Details
            </div>
        </div>




        <div className="flex w-full text-xs">
            <div className="flex flex-col w-2/4">
                <div className="grid grid-cols-2 gap-x-2">
                    <div className="col-span-1 bg-[#f4f0f0] rounded-2xl p-4">
                        <div className="flex justify-between items-center gap-x-1">
                            <span className="flex cursor-pointer">
                                <TextAlignStart size={14} />
                                <ChevronDown size={14} />

                            </span>

                            <span className="flex border border-[#dcdada] rounded-lg p-1.5 gap-x-1 font-bold cursor-pointer hover:bg-gray-200">
                                <p>Filters</p>
                                <ListFilter size={14} />
                            </span>
                        </div>

                        <div className="flex-col pt-2">
                            {socialMediaSales.map((item, index) => <div key={index} className="flex justify-between items-center text-xs py-3 px-2 rounded-xl bg-white my-1 hover:bg-gray-200">
                                <span className="flex gap-x-1 items-center">
                                    <item.icon size={14} />
                                    <p className="text-gray-400 font-semibold">{item.label}</p>
                                </span>
                                <p className="font-bold">
                                    {item.sales}
                                </p>
                                <p className="w-10 h-6 rounded-full bg-[#dcdada] font-semibold flex items-center justify-center">
                                    {item.percentage}%
                                </p>
                            </div>)}
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col bg-[#f4f0f0] rounded-2xl p-4">
                        <div className="flex justify-between items-center gap-x-1">
                            <span className="flex cursor-pointer">
                                <TextAlignStart size={14} />
                                <ChevronDown size={14} />

                            </span>

                            <span className="flex border border-[#dcdada] rounded-lg p-1.5 gap-x-1 font-bold cursor-pointer hover:bg-gray-200">
                                <p>Filters</p>
                                <ListFilter size={14} />
                            </span>
                        </div>

                        <div className="flex items-end h-full mb-4 gap-x-1 py-4">
                            <div className="w-1/5 h-[70%] bg-white rounded-xl hover:bg-gray-200">

                                <div className="flex justify-center pt-3 h-2/4 bg-[repeating-linear-gradient(120deg,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_2px,white_2px,white_6px)]">
                                    <BehanceIcon size={18} />
                                </div>

                            </div>
                            <div className="w-1/5 h-[100%] bg-white rounded-xl hover:bg-gray-200">
                                <div className="flex justify-center pt-3">
                                    <DribbbleIcon size={18} />
                                </div>
                            </div>
                            <div className="w-1/5 h-[60%] bg-white rounded-xl hover:bg-gray-200">
                                <div className="flex justify-center pt-3">
                                    <GoogleIcon size={18} />
                                </div>
                            </div>
                            <div className="w-1/5 h-[40%] bg-white rounded-xl hover:bg-gray-200">
                                <div className="flex justify-center pt-3">
                                    <InstagramIcon size={18} />
                                </div>
                            </div>
                            <div className="w-1/5 h-[80%] bg-white rounded-xl hover:bg-gray-200">
                                <div className="flex justify-center pt-3 h-full bg-[repeating-linear-gradient(120deg,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_2px,white_2px,white_6px)]">
                                    <ShoppingBag size={18} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-500 font-semibold">Deals amount</p>
                            <p className="flex font-bold gap-x-1">by referrer category <ChevronDown size={14} /></p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col bg-[#f4f0f0] my-4 rounded-2xl ">

                    <div className="flex justify-between items-center p-4">
                        <span className="flex items-center gap-x-2">
                            <DribbbleIcon />

                            <span className="flex flex-col justify-center">
                                <p className="text-gray-500 font-semibold">Platform value</p>
                                <p className="flex gap-x-0.5 font-bold items-center cursor-pointer">Dribbble <ChevronDown size={14} className="text-gray-500" /></p>
                            </span>
                        </span>

                        <span className="flex rounded-xl p-0.5 bg-white gap-x-1 font-semibold tracking-wide">
                            <p className="rounded-xl bg-black text-white px-4 py-2">Revenue</p>
                                <p className="rounded-xl bg-[#f0f0f0] px-4 py-2 hover:bg-[#333333] hover:text-whitex">Leads</p>
                                <p className="rounded-xl bg-[#f0f0f0] px-4 py-2 hover:bg-[#333333] hover:text-whitex">W/L</p>
                        </span>
                    </div>


                    <div className="flex gap-x-4">
                        <div className="w-2/6 bg-[#d72e58] rounded-tr-2xl rounded-bl-2xl p-4">
                            <div className="flex items-center">
                                <h1 className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[#dcdada] font-semibold text-sm">
                                    Average monthly
                                </h1>

                                <div className="flex flex-col gap-y-4 px-8">
                                    <div className="flex flex-col gap-y-1">
                                        <p className="text-[#dcdada]">Revenue</p>
                                        <p className="text-white font-bold">$18,552</p>
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                        <p className="text-[#dcdada]">Leads</p>
                                        <p className="text-white font-bold flex gap-x-2">374 <p className="text-[#dcdada]">97/276</p></p>
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                        <p className="text-[#dcdada]">Win/Lose</p>
                                        <p className="text-white font-bold flex gap-x-2">16% <p className="text-[#dcdada]">51/318</p></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex-1 w-full h-full">


                            <div className="absolute inset-0 flex flex-col justify-between pb-8 pt-6 px-2">
                                {["$14,500", "$11,000", "$7,500", "$4,000"].map((label, index) => (
                                    <div key={index} className="flex items-center w-full">
                                        <div className="w-full h-[1px] bg-white" />
                                        <span className="text-[9px] font-bold text-gray-300 w-12 text-right pl-2">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="relative z-10 flex justify-between items-end h-full gap-x-4 pr-12 pl-4">
                                <Chart h1={50} h2={40} h3={20} label="Sep" img1={image1} img2={image3} img3={image2} p="$6,901" />
                                <Chart h1={90} h2={60} h3={35} label="Oct" img1={image1} img2={image3} img3={image2} p="$11,035" />
                                <Chart h1={70} h2={30} h3={35} label="Nov" img1={image1} img2={image3} img3={image2} p="$9,288" />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <RightContainer />
        </div>

    </div>
}

function Chart({ h1, h2, h3, label, img1, img2, img3, p }: { h1: number, h2: number, h3: number, label: string, img1: string, img2: string, img3: string, p: string }) {
    return (
        <div className="flex flex-col py-4 h-full">
            <div className="flex items-end pb-4 gap-x-2 h-full mt-6">

                <Bar
                    img={img1}
                    height={h1}
                    price={p}
                    className="bg-[repeating-linear-gradient(120deg,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_2px,white_2px,white_6px)]"
                />

                <Bar img={img2} height={h2} className="bg-[#dcdada]" />

                <Bar img={img3} height={h3} className="bg-[#dcdada]" />
            </div>

            <p className="flex justify-center font-bold text-gray-500 text-xs">{label}</p>
        </div>
    )
}

function Bar({ className, img, height, price }: { className: string, img: string, height: number, price?: string }) {
    return (
        <div
            style={{ height: `${height}%` }}
            className={`relative flex w-6 rounded-lg ${className}`}
        >
            {price && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2">
                    <p className="font-semibold text-white bg-[#d72e58] py-0.5 px-2 rounded text-[10px] shadow-sm whitespace-nowrap">
                        {price}
                    </p>
                </div>
            )}

            <img
                src={img}
                className="absolute h-3 w-3 rounded-full -bottom-1.5 left-1/2 -translate-x-1/2 object-cover border border-white"
            />
        </div>
    )
}


function RightContainer() {
    const gridLayout = "grid grid-cols-[1.5fr_1fr_1.2fr_0.5fr_1.5fr] gap-2";

    return (
        <div className="w-full flex flex-col gap-4 py-1 text-xs">

            <div className={`${gridLayout} font-semibold text-gray-400 px-8`}>
                <span>Sales</span>
                <span>Revenue</span>
                <span>Leads</span>
                <span>KPI</span>
                <span>W/L</span>
            </div>

            <div className={`${gridLayout} items-center font-bold text-gray-800 mx-8 shadow rounded-full`}>

                <div className="flex items-center gap-2">
                    <img src={image1} className="h-6 w-6 rounded-full object-cover" />
                    <p>Armin A.</p>
                </div>

                <p>$209,633</p>

                <div className="flex items-center gap-1">
                    <span className="px-2 py-1 bg-black text-white rounded-full text-[10px]">
                        41
                    </span>
                    <span className="px-2 py-1 bg-[#f3f4f6] text-gray-500 rounded-full text-[10px]">
                        118
                    </span>
                </div>

                <p>0.84</p>

                <div className="flex items-center justify-end gap-1 pr-6">
                    <span className="px-2 py-1 rounded-full text-[10px]">
                        31%
                    </span>
                    <span className="px-2 py-1 bg-black text-white rounded-full text-[10px]">
                        12
                    </span>
                    <span className="px-2 py-1 bg-[#f3f4f6] text-gray-500 rounded-full text-[10px]">
                        29
                    </span>
                </div>
            </div>

            <div className="flex flex-col mx-6 h-full bg-gradient-to-br from-[#F7F7F7] to-[#FAEAE6] rounded-2xl">
                <div className={`${gridLayout} items-center font-bold text-gray-800 p-2`}>

                    <div className="flex items-center gap-2">
                        <img src={image3} className="h-6 w-6 rounded-full object-cover" />
                        <p>Mikasa A.</p>
                    </div>

                    <p>$156,841</p>

                    <div className="flex items-center gap-1">
                        <span className="px-2 py-1 bg-black text-white rounded-full text-[10px]">
                            54
                        </span>
                        <span className="px-2 py-1 bg-[#f3f4f6] text-gray-500 rounded-full text-[10px]">
                            103
                        </span>
                    </div>

                    <p>0.89</p>

                    <div className="flex items-center justify-end gap-1">
                        <span className="px-2 py-1 rounded-full text-[10px]">
                            39%
                        </span>
                        <span className="px-2 py-1 bg-black text-white rounded-full text-[10px]">
                            21
                        </span>
                        <span className="px-2 py-1 bg-[#f3f4f6] text-gray-500 rounded-full text-[10px]">
                            33
                        </span>

                        <span className="rounded-full bg-[#d72e58] p-0.5 text-white cursor-pointer hover:bg-[#ec418b]">
                            <ChevronUp size={14} />
                        </span>
                    </div>
                </div>
                <span className="flex px-2 py-2 gap-x-2 font-semibold">
                    <p className="px-3 py-1.5 text-nowrap rounded-full bg-white text-[11px]">Top sales <span>💪</span></p>
                    <p className="px-3 py-1.5 text-nowrap rounded-full bg-white text-[11px]">Sales streak <span>🔥</span></p>
                    <p className="px-3 py-1.5 text-nowrap rounded-full bg-white text-[11px]">Top review <span>👍</span></p>
                </span>
                <span className="flex justify-between px-2 py-1">
                    <p className="font-bold">Work with platforms</p>

                    <span className="flex gap-x-2">
                        <p className="flex items-center bg-[#d72e58] px-2 py-0.5 text-white rounded-full">
                            <ChevronsUp size={14} />
                            3
                        </p>
                        <p className="flex items-center bg-[#d72e58] px-2 py-0.5 text-white rounded-full">
                            $156,841
                        </p>
                    </span>
                </span>

                <div className="flex w-full">
                    <div className="flex flex-col w-2/4 rounded-xl p-2 ml-2 justify-between bg-[linear-gradient(to_right,white_0%,white_80%,transparent_80%,transparent_100%),repeating-linear-gradient(120deg,rgba(255,255,255,0.8)_0px,rgba(255,255,255,0.8)_3px,transparent_3px,transparent_6px)]  hover:bg-gray-200">
                        <span className="flex gap-x-1 text-xs font-bold py-2 items-center">
                            <DribbbleIcon size={14} />
                            <p>Dribbble</p>
                        </span>

                        <span className="flex gap-x-3 px-2 text-xl font-bold">
                            <p className="">45.3%</p>
                            <p className="text-[#dcdada] hover:text-gray-500">$71,048</p>
                        </span>
                    </div>

                    <div className="flex-col w-2/4 mr-1">
                        <div className="flex">
                            <div className="flex flex-col justify-between bg-white rounded-2xl w-2/4 p-2 ml-2 hover:bg-gray-200">
                                <span className="flex gap-x-1 text-xs font-bold py-2 items-center">
                                    <InstagramIcon size={14} />
                                    <p>Instagram</p>
                                </span>

                                <span className="flex gap-x-2 px-1 text- font-bold">
                                    <p>28.1%</p>
                                    <p className="text-[#dcdada] hover:text-gray-500">$44,072</p>
                                </span>
                            </div>

                            <div className="flex flex-col w-2/4">
                                <div className="flex flex-col justify-between rounded-2xl w- p-1 m-1 bg-[repeating-linear-gradient(120deg,rgba(255,255,255,0.8)_0px,rgba(255,255,255,0.8)_3px,transparent_3px,transparent_6px)] hover:bg-gray-200">
                                    <span className="flex gap-x-1 text-xs font-bold py-2 items-center">
                                        <GoogleIcon size={14} />
                                        <p>Google</p>
                                    </span>
                                    <span className="flex gap-x-2 px-1 text- font-bold">
                                        <p>14.1%</p>
                                        <p className="text-[#dcdada] hover:text-gray-500">$22,114</p>
                                    </span>
                                </div>
                                <div className="flex font-bold p-2 bg-white rounded-full hover:bg-gray-200">
                                    <span className="flex gap-x-1">
                                        <GlobeIcon size={14} />
                                        <p className="">5.4%</p>
                                        <p className="text-[#dcdada] hover:text-gray-500">$8,469</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-full mt-1 flex justify-between p-2 ml-2 hover:bg-gray-200">
                            <span className="flex gap-x-1 items-center font-bold">
                                <ShoppingBag size={14} />
                                <p>Other</p>
                            </span>

                            <span className="flex gap-x-1 font-bold">
                                <p>7.1%</p>
                                <p className="text-[#dcdada] hover:text-gray-500">$11,135</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between text-xs font-bold m-2 items-center">
                    <p>Sales Dynamic</p>
                    <ArrowUpRight size={14} />
                </div>

                <div>
                    <SalesDynamicChart />
                </div>
            </div>


            <div className={`${gridLayout} items-center font-bold text-gray-800 mx-8 shadow rounded-full`}>

                <div className="flex items-center gap-2">
                    <img src={image2} className="h-6 w-6 rounded-full object-cover" />
                    <p>Eren Y.</p>
                </div>

                <p>$209,633</p>

                <div className="flex items-center gap-1">
                    <span className="px-2 py-1 bg-black text-white rounded-full text-[10px]">
                        41
                    </span>
                    <span className="px-2 py-1 bg-[#f3f4f6] text-gray-500 rounded-full text-[10px]">
                        118
                    </span>
                </div>

                <p>0.84</p>

                <div className="flex items-center justify-end gap-1 pr-6">
                    <span className="px-2 py-1 rounded-full text-[10px]">
                        31%
                    </span>
                    <span className="px-2 py-1 bg-black text-white rounded-full text-[10px]">
                        12
                    </span>
                    <span className="px-2 py-1 bg-[#f3f4f6] text-gray-500 rounded-full text-[10px]">
                        29
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RightContainer;



export const SalesDynamicChart = () => {
    return (
        <div className="col-span-2  rounded-[30px] px-4 py-2 relative overflow-hidden flex flex-col justify-between">
            <div className="flex justify-between text-[10px] font-bold text-gray-400 relative z-10 px-2">
                <span>W 1</span>
                <span>W 3</span>
                <span>W 5</span>
                <span>W 7</span>
                <span>W 9</span>
                <span>W 11</span>
            </div>

            <div className="absolute inset-0 flex justify-between px-6 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-full w-px bg-gray-50"></div>
                ))}
            </div>


            <div className="relative h-20 w-full">

                <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
                    <path
                        d="M0,100 C50,80 100,120 150,90 S250,60 350,100 S450,140 550,110 S650,80 800,120"
                        stroke="#F9A8D4"
                        strokeWidth="3"
                        strokeDasharray="8,8"
                        fill="none"
                    />
                    <path
                        d="M0,130 C40,140 80,110 120,125 S200,60 280,90 S360,110 440,130 S520,100 600,115 S700,60 800,50"
                        stroke="#F43F5E"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>
            </div>


            <div className="relative mt-2 h-1 rounded-full bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 w-full">

                <div className="absolute -top-2 transform -translate-x-1/2" style={{ left: '35%' }}>
                    <div className="relative group">
                        <div className="bg-blue-600 p-1 rounded-md text-white shadow-md cursor-pointer hover:scale-110 transition">
                            <BehanceIcon size={12} />
                        </div>
                        <div className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white rounded-full p-[1px] border border-white">
                            <ArrowUp size={8} />
                        </div>
                    </div>
                </div>

                <div className="absolute -top-2 transform -translate-x-1/2" style={{ left: '55%' }}>
                    <div className="relative group">
                        <div className="bg-pink-500 p-1 rounded-md text-white shadow-md cursor-pointer hover:scale-110 transition">
                            <Globe size={12} />
                        </div>
                        <div className="absolute -top-1.5 -right-1.5 bg-black text-white rounded-full p-[1px] border border-white">
                            <ArrowDown size={8} />
                        </div>
                    </div>
                </div>

                <div className="absolute -top-2 transform -translate-x-1/2" style={{ left: '85%' }}>
                    <div className="relative group cursor-pointer hover:scale-110 transition">
                        <img src={image3} className="w-6 h-6 rounded-full border border-white shadow-md object-cover" />
                        <div className="absolute -top-1 -right-1 bg-rose-500 text-white rounded-full p-[1px] border border-white">
                            <Star size={8} fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
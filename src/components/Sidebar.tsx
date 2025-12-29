import { Settings, FileText, LayoutGrid, ChartNetwork, BetweenHorizonalStart, Images, MessageCircleMore, Star, RotateCcw, FileStack, Plus, type LucideIcon, Minus } from "lucide-react";
import { useState } from "react";

type SidebarItemType = {
    label: string;
    icon?: LucideIcon;
    count?: number;
    children?: SidebarItemType[];
    isGrey?: boolean;
};

const sidebarData: SidebarItemType[] = [
    { label: "Starred", icon: Star, isGrey: true },
    { label: "Recent", icon: RotateCcw, isGrey: true },
    { label: "Sales lists" },
    { label: "Goals" },
    {
        label: "Dashboard",
        children: [
            { label: "Codename" },
            {
                label: "Shared with me",
                children: [
                    { label: "Cargo2go" },
                    { label: "Cloudz3r", count: 2 },
                    { label: "Idioma" },
                    { label: "Syllables" },
                    { label: "x-0b" }
                ]
            }
        ]
    },
    {
        label: "Reports",
        children: [
            {
                label: "Shared with me",
                children: [
                    { label: "Deals by user" },
                    { label: "Deal duration" }
                ]
            },
            {
                label: "My reports",
                children: [
                    { label: "Emails received" },
                    { label: "Deal duration" },
                    { label: "New report" },
                    { label: "Analytics", count: 7 }
                ]
            }
        ]
    },
    { label: "Manage folders", icon: FileStack, isGrey: true }
];

export const Sidebar = () => {
    return <div className="h-full flex">
        <SideIcons />
        <div className="ml-6 w-52 overflow-y-auto">
            {sidebarData.map((item, index) => (
                <RecursiveItem key={index} item={item} />
            ))}
        </div>
    </div>
};

function RecursiveItem({ item, depth = 0 }: { item: SidebarItemType, depth?: number }) {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    const textColor = item.isGrey ? "text-[#969696]" : "text-[#1B1D21]";

    const fontWeight = "font-bold"

    return (
        <div className="select-none">
            <div
                className={`
          flex items-center py-1 cursor-pointer transition-colors relative group
          text-xs ${fontWeight} ${textColor} hover:text-primary 
        `}
                style={{ paddingLeft: depth * 16 }}
                onClick={() => hasChildren && setIsOpen(!isOpen)}
            >
                {depth > 0 && (
                    <span className="absolute -left-[1px] top-1/2 w-3 h-px bg-[#dcdada]" />
                )}

                <div className="flex items-center justify-between w-full pr-2">
                    <div className="flex items-center gap-2.5">
                        {item.icon && <item.icon size={14} strokeWidth={2.5} />}
                        <span className="text-[12px]">{item.label}</span>
                    </div>

                    {hasChildren ? (
                        <div className="text-gray-400 hover:text-primary transition-colors bg-white rounded-full">
                            {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                        </div>
                    ) : item.count ? (
                        <span className="bg-[#d72e58] text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                            {item.count}
                        </span>
                    ) : null}
                </div>
            </div>

            {isOpen && hasChildren && (
                <div className="relative ml-2 border-l border-[#dcdada]">
                    {item.children!.map((child, index) => (
                        <RecursiveItem key={index} item={child} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
}

export function SideIcons() {

    const menuItems = [
        { icon: ChartNetwork, active: false },
        { icon: BetweenHorizonalStart, active: true },
        { icon: FileText, active: false },
        { icon: LayoutGrid, active: false },
        { icon: Images, active: false },
    ];

    return <div className="p-4 h-full grid grid-rows-[1fr_auto]">
        <div>
            {menuItems.map((item, index) => <div key={index}
                className={`rounded-full w-10 h-10 flex items-center justify-center my-4
            ${item.active ? "bg-[#d72e58] text-white" : "bg-white hover:bg-gray-300"
                    }`}
            >
                <item.icon size={14}/>
            </div>
            )}
        </div>

        <div>
            <div className="relative flex justify-center items-center p-3 h-10 w-10 rounded-full my-2 bg-white hover:bg-gray-300">
                <MessageCircleMore size={14} />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full ring-2 ring-[#d72e58] bg-white" />
            </div>
            <div className="flex justify-center items-center p-3 h-10 w-10 rounded-full my-2 bg-white hover:bg-gray-300">
                <Settings size={14} />
            </div>
        </div>
    </div>
}

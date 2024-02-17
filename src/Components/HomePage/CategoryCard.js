import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch , BsCamera , BsHeadphones } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";

function CategoryCard() {
    // Store components, not just references
    const Icons = [
        { icon: IoIosPhonePortrait, label: "Phone" },
        { icon: HiOutlineDesktopComputer, label: "Computers" },
        { icon: BsSmartwatch, label: "SmartWatch" },
        { icon: BsCamera , label: "Camera" },
        { icon: BsHeadphones , label: "HeadPhones" },
        { icon: IoGameControllerOutline, label: "Gaming" },
    ];

    return (
        <>
            {Icons.map((IconItem, index) => {
                const IconComponent = IconItem.icon;
                return (
                    <div key={index} className="relative flex w-full h-[10rem] max-w-[8rem] lg:max-w-[14rem] flex-col rounded-md hover:bg-red-500 hover:border-red-500 m-1 border border-gray-500 text-gray-500 hover:text-white">
                        <div className="m-auto">
                            {/* Render the icon component dynamically */}
                            <IconComponent className="w-14 h-14 mx-auto" />
                            <p className="text-center my-2">{IconItem.label}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default CategoryCard;


import NavBar from "./nav/navBar";
import { useEffect, useRef } from "react";

export default function Header() {

    return (
        <div className=" flex flex-col w-full items-start fixed top-0 min-h-[134px] px-[80px] ssm:px-[142px] py-5 justify-center bg-black bg-opacity-50 backdrop-blur-lg z-20">
            <div className="w-full border-b-[1px] border-b-white">
                <h1 className=" font-normal text-center md:text-start text-[24px] pb-5">DAVI LOUREIRO</h1>
            </div>
            <NavBar />
        </div>
    )
}
import Image from "next/image";
import Button from "./button";

export default function FirstContent() {
    return (
        <div className="text-[#D9D9D9] pt-[200px] px-10 bg-Banner bg-no-repeat bg-cover bg-center w-full min-h-[1080px] sticky top-0 flex flex-col lg:flex-row justify-center items-center gap-10">
            <h1 className="font-fira font-semibold text-[30px] xxs:text-[60] xs:text-[35px] ssm:text-[80px] sm:text-[90px] md:text-[110px] max-w-[669px]">WEB DEVELOPER</h1>
            <div className="flex flex-col gap-1 items-center justify-center"> 
                <div className="flex flex-col font-normal text-[24px] max-w-[619px] gap-5 items-center justify-center" style={{ lineHeight: '1.5' }}>
                    <p>My goal is to develop inclusive and innovative solutions, leveraging my passion for technology.</p>
                    <p>I intend to contribute to projects that strengthen support networks and provide essential resources.</p>
                    <p>I seek learning opportunities to further empower myself and be part of a team where I can drive innovation and promote a more inclusive and technologically advanced society.</p>
                </div>
                <div className="flex flex-col 2xl:flex-row gap-8 items-center justify-center pb-5"> 
                    <Button link="https://drive.google.com/file/d/1vzBmPSQcmQBMgdgie038G8UXW08HkeYo/view?usp=sharing" text="DOWNLOAD CV" />
                    <Button link="#contact" text="CONTACT ME" />
                    <Button link="#projects" text="MY PROJECTS" />
                </div>
            </div>
        </div>
    );
}
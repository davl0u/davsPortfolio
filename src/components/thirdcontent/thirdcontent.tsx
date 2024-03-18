import Image from "next/image"
import { LiaHtml5, LiaCss3Alt, LiaNodeJs, LiaReact, LiaPython, LiaJava } from "react-icons/lia";
import { SiPandas, SiMysql, SiTailwindcss } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";

export default function ThirdContent() {
    return (
        <div className="px-10 w-full flex flex-col justify-center items-center gap-20 pt-[180px]">
            <h1 className="font-[900] text-[35px] lg:text-[60px]">TECHNOLOGIES</h1>
            <p className="font-600 text-[22px] max-w-[792px] text-center">From an early age, I immersed myself in the world of technology, exploring design and programming. 
            More recently, I have focused on web and fullstack development, mastering tools such as HTML, CSS, JavaScript, Node.js, React.js, Python, Java and more. </p>
            <a 
            href="https://www.linkedin.com/in/loureiro-davi/" 
            className="font-600 text-[22px] text-center"
            target="blank"
            >Visit my LinkedIn for more details.</a>
            <div className="max-w-[1000px] w-full flex flex-wrap justify-center items-center gap-10">
                <LiaHtml5 className="text-[86px] transition-transform transform hover:scale-110" />
                <LiaCss3Alt className="text-[86px] transition-transform transform hover:scale-110" />
                <LiaNodeJs className="text-[86px] transition-transform transform hover:scale-110" />
                <LiaReact className="text-[86px] transition-transform transform hover:scale-110" />
                <LiaPython className="text-[86px] transition-transform transform hover:scale-110" />
                <LiaJava className="text-[86px] transition-transform transform hover:scale-110" />
                <SiMysql className="text-[86px] transition-transform transform hover:scale-110" />
                <SiPandas className="text-[86px] transition-transform transform hover:scale-110" />
                <SiTailwindcss className="text-[86px] transition-transform transform hover:scale-110" />
                <RiJavascriptLine className="text-[86px] transition-transform transform hover:scale-110" />
                <BiLogoSpringBoot className="text-[86px] transition-transform transform hover:scale-110" />
                <TbBrandTypescript className="text-[86px] transition-transform transform hover:scale-110" />
            </div>
        </div>
    )
}

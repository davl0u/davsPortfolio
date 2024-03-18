import Image from "next/image";
import webdev from "@images/WEBDEVELOPER.png";

interface Props {
    text: any;
    link: any;
}

export default function Button(props: Props) {
    return (
        <a target="blank" href={props.link} className="max-w-[172px] w-full h-[55.5px] flex justify-center items-center px-4 py-5 border-[2px] border-white rounded-full text-sm whitespace-nowrap"> 
            {props.text}
        </a>
    );
}
import React, { useState, useEffect } from "react";
import Image from "next/image";
import eudavi from "@images/eudavi.png";

const TypingAnimation: React.FC = () => {
  const [typingText, setTypingText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const text = "HI, I AM DAVI :)";
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (index <= text.length) {
          setTypingText(text.slice(0, index));
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
          setIndex(text.length);
        }
      } else {
        if (index >= 0) {
          setTypingText(text.slice(0, index));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsTyping(true);
          setIndex(0);
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [index, isTyping]);

  return (
    <h1 className="font-[900] text-[60px]">
      {typingText}
      <span className="animate-ping inline-block h-1 w-1 rounded-full bg-gray-900 mx-1"></span>
    </h1>
  );
};

const SecondContent: React.FC = () => {
  return (
    <div
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row justify-center items-center gap-[100px] pt-[200px]"
    >
      <Image src={eudavi} alt="" />
      <div className="flex flex-col gap-5 max-w-[627px]">
        <TypingAnimation />
        <p className="font-600 text-[22px]">
          I am 20 years old, and I am a native of Rio de Janeiro. From an early
          age, I have developed a wide range of interests, from music and acting
          to technology.
        </p>
        <p className="font-600 text-[22px]">
          I am constantly seeking to learn new skills and ways to contribute to
          my community. I volunteer in web design and arts projects for my
          church and am actively involved in online technology communities.
        </p>
        <p className="font-600 text-[22px]">
          Last year, I earned a scholarship to specialize in Java FullStack,
          which I successfully completed. This year, I was awarded a scholarship
          to participate in a Microsoft Bootcamp in Cloud Technology and AI.
        </p>
        <p className="font-600 text-[22px]">
          I am excited to begin my degree in Systems Analysis and Development
          and eager to apply all the knowledge gained to future challenges.
        </p>
      </div>
    </div>
  );
};

export default SecondContent;

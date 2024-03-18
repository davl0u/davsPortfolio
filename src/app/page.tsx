"use client"
import FirstContent from "@/components/firtscontent/firstcontent";
import FourthContent from "@/components/fourthcontent/fourthcontent";
import FifthContent from "@/components/fifthcontent/fifthcontent";
import SecondContent from "@/components/secondcontent/secondcontent";
import ThirdContent from "@/components/thirdcontent/thirdcontent";
import SixthContent from "@/components/sixthcontent/sixthcontent";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <FirstContent />
      <div className="w-full bg-[linear-gradient(180deg,_#362DEA_0%,_#0C0C0C_100%)] flex flex-col items-center justify-center min-h-screen z-10">
        <SecondContent />
        <ThirdContent />
        <div id='projects' className="flex flex-col items-center pt-[265px] gap-10">
          <h1 className=" font-black text-[35px] lg:text-[60px]">PROJECTS</h1>
          <FourthContent />
        </div>
        <div id='contact' className="flex flex-col items-center pt-[190px] gap-10">
          <h1 className=" font-black text-[35px] lg:text-[60px]">CONTACT</h1>
          <FifthContent />
        </div>
        <div>
          <SixthContent />
        </div>
      </div>
    </main>
  );
}

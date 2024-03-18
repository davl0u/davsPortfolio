import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";

const FifthContent: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const xhr = new XMLHttpRequest();
    xhr.open(event.currentTarget.method, event.currentTarget.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200 || xhr.status === 201) {
        console.log("Success:", xhr.responseText);
        // Redirect to a thank you page
        window.location.href = "https://yourdomain.co/thanks.html";
      } else {
        console.error("Error:", xhr.responseText);
        // Handle error here
      }
    };
    xhr.send(formData);
  };

  return (
    <div
      id="contact"
      className=" px-10 w-full flex flex-col lg:flex-row justify-center items-center gap-[150px] pt-[10px] pb-[180px]"
    >
      <div className="flex flex-col gap-10">
        <a
          className="flex flex-row gap-6"
          target="blank"
          href="https://www.linkedin.com/in/loureiro-davi/"
        >
          <AiOutlineLinkedin className="xxs:text-[76px] text-[40px]" />
          <div className="flex flex-col justify-center font-semibold">
            <h1 className="xxs:text-[24px] text-[18px]">LINKEDIN</h1>
            <p className="xxs:text-[20px] text-[15px]">
              linkedin.com/in/loureiro-davi
            </p>
          </div>
        </a>
        <a
          className="flex flex-row gap-6"
          target="blank"
          href="https://www.github.com/davl0u"
        >
          <AiOutlineGithub className="xxs:text-[76px] text-[40px]" />
          <div className="flex flex-col justify-center font-semibold">
            <h1 className="xxs:text-[24px] text-[18px]">GITHUB</h1>
            <p className="xxs:text-[20px] text-[15px]">github.com/davl0u</p>
          </div>
        </a>
        <div className="flex flex-row gap-6">
          <AiOutlineMail className="xxs:text-[76px] text-[40px]" />
          <div className="flex flex-col justify-center font-semibold">
            <h1 className="xxs:text-[24px] text-[18px]">E-MAIL</h1>
            <p className="xxs:text-[20px] text-[15px]">
              daviloureiro.me@gmail.com
            </p>
          </div>
        </div>
        <a
          className="flex flex-row gap-6"
          target="blank"
          href="https://wa.me/5521964537415"
        >
          <AiOutlineWhatsApp className="xxs:text-[76px] text-[40px]" />
          <div className="flex flex-col justify-center font-semibold">
            <h1 className="xxs:text-[24px] text-[18px]">WHATSAPP</h1>
            <p className="xxs:text-[20px] text-[15px]">+55 (21) 96453-7145</p>
          </div>
        </a>
        <a
          className="flex flex-row gap-6"
          target="blank"
          href="https://www.instagram.com/daviloureiro.se"
        >
          <AiOutlineInstagram className="xxs:text-[76px] text-[40px]" />
          <div className="flex flex-col justify-center font-semibold">
            <h1 className="xxs:text-[24px] text-[18px]">INSTAGRAM</h1>
            <p className="xxs:text-[20px] text-[15px]">
              instagram.com/daviloureiro.se
            </p>
          </div>
        </a>
      </div>
      <form
        action="https://formsubmit.co/daviloureiro.me@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col w-full text-white font-semibold text-[24px] max-w-[970px] gap-8"
      >
        <div className="flex flex-col w-full">
          <label className="pl-6" htmlFor="name">
            Name
          </label>
          <input
            className=" p-6 border-[2px] border-white rounded-3xl h-[93px] bg-transparent"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="pl-6" htmlFor="email">
            E-mail
          </label>
          <input
            className=" p-6 border-[2px] border-white rounded-3xl h-[93px] bg-transparent"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="pl-6" htmlFor="message">
            Message
          </label>
          <textarea
            className=" p-6 border-[2px] border-white rounded-3xl h-[140px] bg-transparent"
            name="message"
            id="message"
            required
          ></textarea>
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://yourdomain.co/thanks.html"
        />

        <button
          className="border-[2px] border-white rounded-[30px] bg-transparent w-[172px] h-[55.5px]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FifthContent;

import React from "react";

export function Codingtools(props) {
  return (
    <>
      <div>
        <div className="flex justify-between pb-[90px]">
          <div className="">
            <h1 className="text-[#0f1b61] text-4xl font-bold">
              Open Source <span className="text-[#73bbc5]">.</span>
            </h1>
            <p className="pt-5 text-[#0f1b61]">
              From time to time I like to release open source projects to help
              the wider <br /> web development community. Below are two of my
              most popular releases.
            </p>
          </div>

          <img
            className="object-cover h-28 w-[400px]"
            src="https://i.pinimg.com/736x/58/be/52/58be5226ca0cd974b78b21f79447eba0.jpg"
            alt=""
          />
        </div>
        <div className="flex items-start justify-center pb-16">
          <img
            className="h-[300px]"
            src="https://i.pinimg.com/736x/c7/b6/12/c7b6126fba8bbcfbd804544d0cdc69b6.jpg"
            alt=""
          />
          <div className="pl-20">
            <h1 className="text-3xl text-[#0f1b61] font-bold pb-[20px]">
              SynthWave '84 <span className="text-[#73bbc5]">.</span>
            </h1>
            <p className="text-[#0f1b61] pb-[20px]">
              I'm a big fan of Visual Studio Code, but when I couldn't find a
              colour scheme I liked, I <br /> decided to roll my own. SynthWave
              '84 was the result. <br /> <br /> Since I first posted about its
              development the theme has proven to be wildly popular, <br />
              passing two million downloads in October 2024.
            </p>
            <button className="border-[3px] rounded-md border-blue-600  py-[5px] px-[5px] hover:bg-blue-100 text-[#0f1b61]">
              Get SynthWave '84e
            </button>
          </div>
        </div>
        <div className="line h-[1px] w-full bg-black" />
        <div className="text-[#0f1b61] flex items-center justify-center pb-16 pt-16">
          <img
            className="h-[300px]"
            src="https://i.pinimg.com/736x/c7/b6/12/c7b6126fba8bbcfbd804544d0cdc69b6.jpg"
            alt=""
          />
          <div className="pl-20">
            <h1 className="text-3xl  font-bold pb-[20px]">
              Tornis <span className="text-[#73bbc5]">.</span>
            </h1>
            <p className="pb-[20px]">
              Tornis is a minimal JavaScript library that watches the state of
              your browser's viewport, <br /> allowing you to respond whenever
              something changes. <br /> <br /> Think of it as a data store for
              your viewport, giving you access to screen size, mouse <br />{" "}
              cursor position, scroll position, gyroscope and more.
            </p>
            <button className="border-[3px] rounded-md border-blue-600 w-[150px] py-[5px] hover:bg-blue-100 text-[#0f1b61]">
              Get Tornis
            </button>
          </div>
        </div>
        <div className="line h-[1px] w-full bg-black" />
        <div className="text-[#0f1b61] flex items-center justify-center pb-16 pt-16">
          <img
            className="h-[300px]"
            src="https://i.pinimg.com/736x/c7/b6/12/c7b6126fba8bbcfbd804544d0cdc69b6.jpg"
            alt=""
          />
          <div className="pl-20">
            <h1 className="text-3xl  font-bold pb-[20px]">
              Rekishi <span className="text-[#73bbc5]">.</span>
            </h1>
            <p className="pb-[20px]">
              Rekishi is a minimal wrapper for the History API that provides
              additional pub/sub <br /> functionality. <br /> <br /> If you need
              to create dynamic transitions between different pages or different
              types of <br /> content, then Rekishi can help.
            </p>
            <button className="border-[3px] rounded-md border-blue-600 w-[150px] py-[5px] hover:bg-blue-100 text-[#0f1b61]">
              Get Rekishi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

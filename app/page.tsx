/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useState } from "react";

export default function page() {
  const [count, setCount] = useState(1);
  const [heart, setHeart] = useState("");
  const [raju, setRaju] = useState("");
  const [hidethebutton, setHideTheButton] = useState("");
  const handle = () => {
    const riyas = (Math.random() * 100);
    setCount(Math.round(riyas));
    setHideTheButton("hidden");
    if (riyas <= 30) {
      setHeart("💖");
      setRaju("");
    }
    else if (riyas <= 50) {
      setHeart("💖💖");
      setRaju("/--");
    }
     else if (riyas <=70) {
      setHeart("💖💖💖");
      setRaju("/--");
    }
    else if (riyas <=89) {
      setHeart("💖💖💖");
      setRaju("/--");
    }
    else if (riyas > 89)  {
      setHeart("😱😱😱");
      setRaju("/raju.mp4");

    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-6">
      <div className={`${hidethebutton} flex flex-col justify-items-center gap-6`}>
      <div>Click to know your luck in relationship</div>
      <button onClick={handle} className="bg-black/100 text-[#ededed] justify-center p-2 rounded transform hover:bg-black/50 transition-transform duration-300">Click Me</button>
      </div>
      <div className="text-lg md:text-2xl font-bold text-center flex justify-items-center"> 
        Your percentage is {count}% {heart}!
        </div>
        <div className="flex justify-items-center">
        <video src={raju} width={200} height={200} autoPlay loop controls={false}>get 90 above to see celebration</video>
      </div>
      <div className="w-full text-center md:text-end ">* Get 90% or above to see exclusive celebration</div>
    </div>
  );
}

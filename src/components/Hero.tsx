import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, DownloadCloudIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex items-center flex-col py-15">
      <div>
        <img
          src="https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt=""
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
      </div>
      <p className="text-center py-5 text-[#242424] text-xl font-medium">
        Hi! My name is Tuan
      </p>
      <div className="max-w-screen-sm text-center">
        <h4 className="text-3xl md:text-6xl text-center leading-relaxed mb-5">
          frontend web developer <br className="hidden md:block" /> based in
          London.
        </h4>
        <p className="text-[#565656] text-xl leading-10">
          I am a frontend developer from California, USA with 10 years of
          experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
        <div className="px-8 py-3 bg-[#202020] rounded-full">
          <Button className="text-white">
            connect with me
            <ArrowRight />
          </Button>
        </div>

        <div className="px-8 py-3 bg-[#FFF] rounded-full border border-[#A7A7A7]">
          <Button className="">
            My resume
            <DownloadCloudIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

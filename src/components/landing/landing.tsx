"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import image from "../../../public/assets/images/jakeResumeTemplate.jpeg";
import { useRouter } from "next/navigation";

export const Landing: FunctionComponent = () => {
  const router = useRouter();
  return (
    <div className="w-full relative bg-white overflow-hidden flex  flex-col xl:flex-row items-center  justify-start px-[6.25rem] box-border gap-[0rem_7.125rem] tracking-[normal] text-left text-[6.706rem] text-black font-poppins mq1350:pl-[3.125rem] mq1350:pr-[3.125rem] mq1350:box-border mq1725:flex-wrap mq450:gap-[0rem_1.75rem] mq900:gap-[0rem_3.563rem] mq900:pl-[1.563rem] mq900:pr-[1.563rem] mq900:box-border">
      <div className="w-full flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-center lg:items-start justify-start">
          <div className="self-stretch flex flex-col items-center lg:items-start justify-start ">
            <div className="self-stretch flex flex-col items-center my-20 md:my-6">
              <div className="text-6xl md:text-9xl md:w-full flex flex-row text-center lg:text-start">
                <span className="font-semibold">Resume</span>
                <span className="font-thin">CRAFT</span>
              </div>
              <div className="self-center text-center lg:text-start text-xl mt-20 lg:mt-0">
                Craft professional resumes effortlessly with our online resume
                builder featuring the exclusive Jake Ryan template – stand out
                from the crowd and land your dream job with style
              </div>
            </div>
            <button
              onClick={() => router.push("./dashboard/personal-details")}
              className="cursor-pointer p-3 bg-black w-[22.563rem] rounded-31xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-start justify-center whitespace-nowrap max-w-full border-[1px] border-solid border-black hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray"
            >  <div className="relative text-[1.875rem] font-light font-poppins text-white text-left z-[1]">
                Create Now
              </div>
            </button>
          </div>
          <a href="https://twitter.com/siddheshjungade" target="_target">
            <div className="relative text-3xl text-center lg:text-star inline-block text-gray">
              <span className="inline-block">Developed By </span>
              <b className="text-blue-500">@siddheshjungade</b>
            </div>
          </a>
        </div>
      </div>
      <Image
        className="my-20 relative rounded object-cover max-w-full border-2"
        loading="lazy"
        alt=""
        src={image}
      />
    </div>
  );
};

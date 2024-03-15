"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import image from "../../../public/assets/images/jakeResumeTemplate.jpeg";
import { useRouter } from "next/navigation";

export const Landing: FunctionComponent = () => {
  const router = useRouter();
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-end justify-start pt-[6.75rem] px-[6.25rem] pb-[5.563rem] box-border gap-[0rem_7.125rem] tracking-[normal] text-left text-[6.706rem] text-black font-poppins mq1350:pl-[3.125rem] mq1350:pr-[3.125rem] mq1350:box-border mq1725:flex-wrap mq450:gap-[0rem_1.75rem] mq900:gap-[0rem_3.563rem] mq900:pl-[1.563rem] mq900:pr-[1.563rem] mq900:box-border">
      <div className="w-[58.75rem] flex flex-col items-start justify-start min-w-[58.75rem] min-h-[41rem] max-w-full mq1350:min-w-full mq1725:flex-1 mq1725:min-h-[auto]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11.25rem_0rem] max-w-full mq1350:gap-[5.625rem_0rem] mq900:gap-[2.813rem_0rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.063rem_0rem] max-w-full mq900:gap-[1.5rem_0rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem_0rem] max-w-full mq900:gap-[1.25rem_0rem]">
              <div className="w-[54.375rem] relative leading-[6.875rem] inline-block max-w-full mq450:text-[2rem] mq450:leading-[2.75rem] mq900:text-[3.375rem] mq900:leading-[4.125rem]">
                <span className="font-semibold">Resume</span>
                <span className="font-thin">CRAFT</span>
              </div>
              <div className="self-stretch h-[4.438rem] relative text-[1.25rem] inline-block shrink-0 mq450:text-[1rem]">
                Craft professional resumes effortlessly with our online resume
                builder featuring the exclusive Jake Ryan template – stand out
                from the crowd and land your dream job with style
              </div>
            </div>
            <button
              onClick={() => router.push("./dashboard/personal-details")}
              className="cursor-pointer pt-[1.188rem] px-[1.25rem] pb-[1.25rem] bg-black w-[22.563rem] rounded-31xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-start justify-center whitespace-nowrap max-w-full border-[1px] border-solid border-black hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray"
            >
              <div className="h-[5.25rem] w-[22.563rem] relative rounded-31xl bg-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="relative text-[1.875rem] font-light font-poppins text-white text-left z-[1]">
                Create Now
              </div>
            </button>
          </div>
          <a href="https://twitter.com/siddheshjungade" target="_target">
            <div className="relative text-[1.875rem] inline-block max-w-full text-gray mq450:text-[1.125rem] mq900:text-[1.5rem]">
              <span>Developed By:</span>
              <b className="text-blue-500">@siddhesh</b>
            </div>
          </a>
        </div>
      </div>
      <Image
        className="h-[47.688rem] w-[37.25rem] relative rounded object-cover max-w-full mq1725:flex-1 border-2"
        loading="lazy"
        alt=""
        src={image}
      />
    </div>
  );
};

"use client"
import { resumeDataState } from "@/recoil/atom";
import { useRecoilState } from "recoil";

export default function Experience() {
  const [resumeData,setResumeDataState] = useRecoilState(resumeDataState)


    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
          Experience
          {resumeData && JSON.stringify(resumeData)}
      </div>
    );
  }
  
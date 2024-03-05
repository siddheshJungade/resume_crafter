"use client";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { resumeDataAtom } from "@/recoil/atom";
import { FormEvent, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { PersonalDetailsData, ResumeData } from "@/app/types/types";




const inputs = [
  { name: "First Name", type: "text", placeholder: "Deo" },
  { name: "Last Name", type: "text", placeholder: "Tyson" },
  { name: "Email", type: "email", placeholder: "deo@resumecrafter.dev" },
  { name: "Phone No", type: "tel", placeholder: "+91 9876543210" },
  { name: "Github URL", type: "url", placeholder: "https://github.com/deo" },
  {
    name: "Linkedin URL",
    type: "url",
    placeholder: "https://linkedin.com/in/deo",
  },
];


export default function PersonalDetails() {
  const router = useRouter();
  const [personalDetailsData, setPersonalDetailsData] =
    useState<PersonalDetailsData>(() => {
      if (typeof window !== "undefined") {
        const saveData = sessionStorage.getItem("personalDetailsData");
        return saveData ? JSON.parse(saveData) : null;
      } else {
        return null;
      }
    });

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(
        "personalDetailsData",
        JSON.stringify(personalDetailsData)
      );
    }
  }, [personalDetailsData]);


  const setResumeDataState = useSetRecoilState(resumeDataAtom);
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: { [key: string]: any } = {};
    const formData = new FormData(e.currentTarget);
    Array.from(formData).forEach(([name, value]) => {
      data[name] = value;
    });

    let obj: ResumeData= {
      personalDetails: data
    };
    
    setResumeDataState(obj);
    setPersonalDetailsData(data);
    router.push("./education");
  };

  return (
    <form className="w-1/2" onSubmit={onFormSubmit}>
      <div className="w-full h-1/3 grid grid-cols-2  gap-3 mt-20">
        {inputs.map((input, index) => (
          <InputWithLabel
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={personalDetailsData ? personalDetailsData[input.name] : ""}
            onChange={(e) => {
              setPersonalDetailsData({
                ...personalDetailsData,
                [input.name]: e.target.value,
              });
            }}
          />
        ))}
        <Button className="col-span-2" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

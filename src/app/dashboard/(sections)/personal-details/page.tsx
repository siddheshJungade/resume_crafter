"use client";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { resumeDataState } from "@/recoil/atom";
import { FormEvent } from "react";
import {useSetRecoilState } from "recoil";

export default function PersonalDetails() {
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
  
  const setResumeDataState = useSetRecoilState(resumeDataState)

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: { [key: string]: any } = {}; 
    const formData = new FormData(e.currentTarget);
    Array.from(formData).forEach(([name, value]) => {
      data[name] = value;
    });
    setResumeDataState(data)
  };

  return (
      <form className="w-1/2 h-full" onSubmit={onFormSubmit}>
        <div className="w-full h-full grid grid-cols-2  gap-3 mt-20">
          {inputs.map((input, index) => (
            <InputWithLabel
              key={index}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
          <Button className="col-span-2" type="submit">
            Save
          </Button>
        </div>
      </form>
  );
}

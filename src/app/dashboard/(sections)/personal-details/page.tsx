"use client";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { resumeDataAtom } from "@/recoil/atom";
import { FormEvent, useEffect,  } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";




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
  const [resumeData, setResumeDataState] = useRecoilState(resumeDataAtom);
  const {personalDetails} = resumeData
  const router = useRouter();

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("./education");
  };

  return (
    <form className="w-full sm:w-1/2 px-6" onSubmit={onFormSubmit}>
      <div className="w-full h-1/3 grid  grid-cols-1 md:grid-cols-2  gap-3 mt-20">
        {inputs.map((input, index) => (
          <InputWithLabel
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={personalDetails?.[input.name] ? personalDetails[input.name] : ''}
            onChange={(e) => {
              const data = {...resumeData}
              data.personalDetails = {...data.personalDetails}
              data.personalDetails[input.name] = e.target.value
              setResumeDataState(data)
            }}
          />
        ))}
        <Button className="grid-cols-1 md:col-span-2" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

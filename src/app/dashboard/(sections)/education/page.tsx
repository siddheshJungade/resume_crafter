"use client";
import { ButtonCombo } from "@/components/ui/buttonsCombo";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { resumeDataState } from "@/recoil/atom";
import { FormEvent, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

interface EducationDetails {
  [key: string]: string;
}

export default function Education() {
  const [educationData, setEducation] = useState<EducationDetails>(() => {
    if (typeof window !== "undefined") {
      const saveData = sessionStorage.getItem("educationData");
      return saveData ? JSON.parse(saveData) : null;
    } else {
      return null;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("educationData", JSON.stringify(educationData));
    }
  }, [educationData]);

  const inputs = [
    { name: "College/School Name", type: "text", placeholder: "Abc college" },
    { name: "Course", type: "text", placeholder: "B.Tech (Computer Science)" },
    { name: "Location", type: "text", placeholder: "pune, india" },
    { name: "Year", type: "text", placeholder: "2019-2023" },
  ];

  const setResumeDataState = useSetRecoilState(resumeDataState);
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: { [key: string]: any } = {};
    const formData = new FormData(e.currentTarget);
    Array.from(formData).forEach(([name, value]) => {
      data[name] = value;
    });
    setResumeDataState(data);
    setEducation(data);
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
            value={educationData ? educationData[input.name] : ""}
            onChange={(e) => {
              setEducation({ ...educationData, [input.name]: e.target.value });
            }}
          />
        ))}
      </div>

      <ButtonCombo />
    </form>
  );
}

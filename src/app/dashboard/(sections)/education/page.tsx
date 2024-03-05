"use client";
import { EducationDetails, ResumeData } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { ButtonCombo } from "@/components/ui/buttonsCombo";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { resumeDataAtom } from "@/recoil/atom";
import { FormEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const CollageDetails = ({
  educationData,
  setEducation
}: {
  educationData: EducationDetails;
  setEducation: React.Dispatch<React.SetStateAction<EducationDetails>>;
}) => {
  const inputs = [
    { name: "College/School Name", type: "text", placeholder: "Abc college" },
    { name: "Course", type: "text", placeholder: "B.Tech (Computer Science)" },
    { name: "Location", type: "text", placeholder: "pune, india" },
    { name: "Year", type: "text", placeholder: "2019-2023" }
  ]
  return (
    <div  className="w-full  grid grid-cols-2 gap-3 mt-20">
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
  );
};

export default function Education() {
  const [educationData, setEducation] = useState<EducationDetails>(() => {
    if (typeof window !== "undefined") {
      const saveData = sessionStorage.getItem("educationData");
      return saveData ? JSON.parse(saveData) : null;
    } else {
      return null;
    }
  });

  const [numberOfCollageExperience, setNumberOfCollageExperience] =
    useState<number>(1);
    const [resumeData, setResumeDataState] = useRecoilState(resumeDataAtom);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("educationData", JSON.stringify(educationData));
    }
    console.log(resumeData)
  }, [educationData, resumeData]);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: EducationDetails = {};
    const formData = new FormData(e.currentTarget);
    Array.from(formData).forEach(([name, value]) => {
      data[name] = String(value);
    });
    setResumeDataState(
      Object.assign({}, resumeData, { educationDetails: data })
    );
    setEducation(data);
  };

  return (
    <form className="w-1/2 h-full" onSubmit={onFormSubmit}>
      <div className="w-full  grid grid-cols-1 gap-3 mt-10">
        {[...Array(numberOfCollageExperience)].map((_, index) => (
          <CollageDetails
            key={index}
            educationData={educationData}
            setEducation={setEducation}
          />
        ))}
        <Button
          className="w-1/5  justify-self-end dark:bg-yellow-500 dark:hover:bg-yellow-700"
          type="submit"
          disabled={numberOfCollageExperience === 2 || false}
          onClick={() =>
            setNumberOfCollageExperience(numberOfCollageExperience + 1)
          }
        >
          + Add Collage
        </Button>
      </div>

      <ButtonCombo />
    </form>
  );
}

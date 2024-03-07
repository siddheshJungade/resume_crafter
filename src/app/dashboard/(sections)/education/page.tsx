"use client";
import { EducationDetails, ResumeData } from "@/types/types";
import { Button } from "@/components/ui/button";
import { ButtonCombo } from "@/components/ui/buttonsCombo";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { resumeDataAtom } from "@/recoil/atom";
import { FormEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const inputs = [
  { name: "College/School Name", type: "text", placeholder: "Abc college" },
  { name: "Course", type: "text", placeholder: "B.Tech (Computer Science)" },
  { name: "Location", type: "text", placeholder: "pune, india" },
  { name: "Year", type: "text", placeholder: "2019-2023" },
];

const CollageDetails = ({
  educationData,
  onChangeCollageData,
  identifier,
}: {
  educationData: EducationDetails;
  onChangeCollageData: (parms: { idx: number; collageObj: any }) => void;
  identifier: number;
}) => {
  const [eductionItem,setEducationItem] = useState<EducationDetails | null>(null)

  useEffect(() => {
    setEducationItem(educationData)
  },[educationData])

  return (
    <div className="w-full  grid grid-cols-2 gap-3 mt-10" >
      {inputs.map((input, index) => (
        <InputWithLabel
          key={index}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          value={eductionItem ? eductionItem?.[input.name] : ""}
          onChange={(e) => {
            let obj = { ...eductionItem};
            obj[input.name] = e.target.value;
            onChangeCollageData({ idx: identifier, collageObj: obj});
          }}
        />
      ))}
    </div>
  );
};

export default function Education() {
  const [resumeData, setResumeDataState] = useRecoilState(resumeDataAtom);
  const { educationDetails } = resumeData;

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeCollageData = ({
    idx,
    collageObj,
  }: {
    idx: number;
    collageObj: any;
  }) => {
    const data = [...educationDetails];
    data[idx] = collageObj;
    setResumeDataState({ ...resumeData, educationDetails: data });
  };

  return (
    <form className="w-1/2 h-full" onSubmit={onFormSubmit} >
      <div className="w-full  grid grid-cols-1 gap-3 mt-10" >
        {educationDetails.map((data, index) => (
          <CollageDetails
            key={index}
            identifier={index}
            educationData={data}
            onChangeCollageData={onChangeCollageData}
          />
        ))}
        <Button
          className="w-1/5 justify-self-end dark:bg-yellow-500 dark:hover:bg-yellow-700"
          disabled={educationDetails?.length === 2 || false}
          onClick={() => {
            const data = [...educationDetails];
            data.push({});
            setResumeDataState({ ...resumeData, educationDetails: data });
          }}
        >
          + Add Collage
        </Button>
      </div>

      <ButtonCombo />
    </form>
  );
}

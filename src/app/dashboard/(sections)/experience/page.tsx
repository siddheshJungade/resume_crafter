"use client";
import { ExperienceDetails } from "@/types/types";
import { Button } from "@/components/ui/button";
import { ButtonCombo } from "@/components/ui/buttonsCombo";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { resumeDataAtom } from "@/recoil/atom";
import { FormEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { DeleteButton } from "@/components/ui/deleteButton";
import { useRouter } from "next/navigation";
import { DescriptionButton } from "@/components/ui/descriptionButton";
import { Description } from "@/components/ui/description";

const inputs = [
  { name: "Company", type: "text", placeholder: "Google" },
  { name: "Role", type: "text", placeholder: "Software Developer" },
  { name: "Location", type: "text", placeholder: "Pune, india" },
  { name: "Date", type: "text", placeholder: "2019-2023" },
];

const ExperienceItem = ({
  onChange,
  identifier,
  onDeleteExperience,
  experience,
}: {
  onChange: (props: {
    idx: number;
    experienceItem: ExperienceDetails | undefined;
  }) => void;
  identifier: number;
  onDeleteExperience: (idx: number) => void;
  experience: ExperienceDetails;
}) => {
  let [experienceItem, setExperienceItem] =
    useState<ExperienceDetails>(experience);

  useEffect(() => {
    onChange({ idx: identifier, experienceItem: experienceItem });
  }, [experienceItem]);

  const handlerAddNewDescription = () => {
    const data = { ...experienceItem };
    console.log(data);
    if (Array.isArray(data.descriptions)) {
      data.descriptions = [...data.descriptions];
      data.descriptions.push("");
    }
    setExperienceItem(data);
  };

  const onRemoveDescription = (idx: number) => {
    const data = { ...experienceItem };
    if (Array.isArray(data.descriptions)) {
      data.descriptions = [...data.descriptions];
      data.descriptions.splice(idx, 1);
    }
    setExperienceItem(data);
  };

  const handlerDescriptionChange = (idx: number, text: string) => {
    const data = { ...experienceItem };
    if (Array.isArray(data.descriptions)) {
      data.descriptions = [...data.descriptions];
      data.descriptions[idx] = text;
    }
    setExperienceItem(data);
  };

  return (
    <>
      <DeleteButton
        onClick={() => {
          onDeleteExperience(identifier);
        }}
      />
      <div className="w-full  grid  md:grid-cols-2 gap-3 mt-2">
        {inputs.map((input, index) => (
          <InputWithLabel
            key={index}
            name={input.name}
            value={experience?.[input.name as keyof ExperienceDetails]?.toString() || ''}
            type={input.type}
            placeholder={input.placeholder}
            onChange={(e) => {
              const data = { ...experienceItem };
              data[input.name as keyof ExperienceDetails] = e.target.value as string;
              setExperienceItem(data);
            }}
          />
        ))}
      </div>
      {Array.isArray(experienceItem?.descriptions) &&
        experienceItem?.descriptions?.map((description, idx) => {
          return (
            <Description
              description={description}
              key={idx}
              onRemove={() => {
                onRemoveDescription(idx);
              }}
              onTextChange={(e) => {
                handlerDescriptionChange(idx, e.target.value);
              }}
            />
          );
        })}

      <DescriptionButton onClick={handlerAddNewDescription} />
    </>
  );
};

export default function Experience() {
  const [resumeData, setResumeDataState] = useRecoilState(resumeDataAtom);
  const { experienceDetails } = resumeData;
  const router = useRouter();

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("./projects");
  };

  const onChange = (props: {
    idx: number;
    experienceItem: ExperienceDetails | undefined;
  }) => {
    if (props.experienceItem !== undefined) {
      const data = [...experienceDetails];
      data[props.idx] = props.experienceItem;
      setResumeDataState({ ...resumeData, experienceDetails: data });
    }
  };

  const onDeleteExperience = (idx: number) => {
    const data = [...experienceDetails];
    data.splice(idx, 1);
    setResumeDataState({ ...resumeData, experienceDetails: data });
  };

  return (
    <form className="w-full px-6 sm:w-1/2  h-full" onSubmit={onFormSubmit}>
      <div className="w-full  grid grid-cols-1 gap-3 mt-10">
        {experienceDetails?.map((experience, index) => (
          <ExperienceItem
            key={index}
            experience={experience}
            identifier={index}
            onDeleteExperience={onDeleteExperience}
            onChange={onChange}
          />
        ))}
        <Button
          type="button"
          className="w-full md:w-1/5 justify-self-end dark:bg-yellow-500 dark:hover:bg-yellow-700 mt-5"
          disabled={experienceDetails?.length === 2 || false}
          onClick={() => {
            const data = [...experienceDetails];
            data.push({
              descriptions: [""],
            });
            console.log(data);
            setResumeDataState({ ...resumeData, experienceDetails: data });
          }}
        >
          + Add Experience
        </Button>
      </div>

      <ButtonCombo
        onBackClick={() => {
          router.push("./education");
        }}
      />
    </form>
  );
}

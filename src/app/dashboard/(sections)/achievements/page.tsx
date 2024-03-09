"use client";
import { AchievementDetails } from "@/types/types";
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
  { name: "Achievements", type: "text", placeholder: "CLOUD Pro" },
];

const AchievementItem = ({
  onChange,
  identifier,
  onDeleteExperience,
  achievement,
}: {
  onChange: (props: {
    idx: number;
    achievementItem: AchievementDetails | undefined;
  }) => void;
  identifier: number;
  onDeleteExperience: (idx: number) => void;
  achievement: AchievementDetails;
}) => {
  let [achievementItem, setAchievementItem] =
    useState<AchievementDetails>(achievement);

  useEffect(() => {
    onChange({ idx: identifier, achievementItem });
  }, [achievementItem]);

  const handlerAddNewDescription = () => {
    const data = { ...achievementItem };
    console.log(data);
    if (Array.isArray(data.descriptions)) {
      data.descriptions = [...data.descriptions];
      data.descriptions.push("");
    }
    setAchievementItem(data);
  };

  const onRemoveDescription = (idx: number) => {
    const data = { ...achievementItem };
    if (Array.isArray(data.descriptions)) {
      data.descriptions = [...data.descriptions];
      data.descriptions.splice(idx, 1);
    }
    setAchievementItem(data);
  };

  const handlerDescriptionChange = (idx: number, text: string) => {
    const data = { ...achievementItem };
    if (Array.isArray(data.descriptions)) {
      data.descriptions = [...data.descriptions];
      data.descriptions[idx] = text;
    }
    setAchievementItem(data);
  };

  return (
    <>
      <DeleteButton
        onClick={() => {
          onDeleteExperience(identifier);
        }}
      />
      <div className="w-full  grid grid-cols-1 md:grid-cols-1 gap-3 ">
        {inputs.map((input, index) => (
          <InputWithLabel
            key={index}
            name={input.name}
            type={input.type}
            value={
              achievement?.[
                input.name as keyof AchievementDetails
              ]?.toString() || ""
            }
            placeholder={input.placeholder}
            onChange={(e) => {
              const data = { ...achievementItem };
              data[input.name as keyof AchievementDetails] = e.target.value;
              setAchievementItem(data);
            }}
          />
        ))}
      </div>
      {Array.isArray(achievementItem?.descriptions) &&
        achievementItem?.descriptions?.map((description, idx) => {
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

export default function Achievements() {
  const [resumeData, setResumeDataState] = useRecoilState(resumeDataAtom);
  const { achievementDetails } = resumeData;
  const router = useRouter();

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("./skills");
  };

  const onChange = (props: {
    idx: number;
    achievementItem: AchievementDetails | undefined;
  }) => {
    if (props.achievementItem !== undefined) {
      const data = [...achievementDetails];
      data[props.idx] = props.achievementItem;
      setResumeDataState({ ...resumeData, achievementDetails: data });
    }
  };

  const onDeleteExperience = (idx: number) => {
    const data = [...achievementDetails];
    data.splice(idx, 1);
    setResumeDataState({ ...resumeData, achievementDetails: data });
  };

  return (
    <form className="w-1/2 h-full" onSubmit={onFormSubmit}>
      <div className="w-full  grid grid-cols-1 gap-3 mt-10">
        {achievementDetails?.map((achievement, index) => (
          <AchievementItem
            key={index}
            achievement={achievement}
            identifier={index}
            onDeleteExperience={onDeleteExperience}
            onChange={onChange}
          />
        ))}
        <Button
          type="button"
          className="w-1/5 justify-self-end dark:bg-yellow-500 dark:hover:bg-yellow-700 mt-5"
          disabled={achievementDetails?.length === 2 || false}
          onClick={() => {
            const data = [...achievementDetails];
            data.push({
              descriptions: [""],
            });
            setResumeDataState({ ...resumeData, achievementDetails: data });
          }}
        >
          + Add Project
        </Button>
      </div>

      <ButtonCombo
        onBackClick={() => {
          router.push("./projects");
        }}
      />
    </form>
  );
}

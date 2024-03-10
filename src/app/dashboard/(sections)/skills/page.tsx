"use client";
import { SkillDetails } from "@/types/types";
import { Button } from "@/components/ui/button";
import { ButtonCombo } from "@/components/ui/buttonsCombo";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { resumeDataAtom } from "@/recoil/atom";
import { FormEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { DeleteButton } from "@/components/ui/deleteButton";
import { useRouter } from "next/navigation";
import { ModalComponent } from "@/components/ui/modal";

const inputs = [
  { name: "Skill Category", type: "text", placeholder: "Technology" },
  {
    name: "Skills",
    type: "text",
    placeholder: "AWS, Node.js, React.js, MySQL",
  },
];

const SkillItem = ({
  skillData,
  onChangeSkillData,
  identifier,
  onDeleteSkill,
}: {
  skillData: SkillDetails;
  onChangeSkillData: (parms: { idx: number; skillObj: SkillDetails }) => void;
  identifier: number;
  onDeleteSkill: (idx: number) => void;
}) => {
  const [skillItem, setSkillItem] = useState<SkillDetails>(skillData);

  useEffect(() => {
    onChangeSkillData({ idx: identifier, skillObj: skillItem });
  }, [skillItem]);

  return (
    <>
      <div className="w-full flex justify-around  flex-grow-2 ">
        {inputs.map((input, index) => (
          <InputWithLabel
            className="w-full mr-2"
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={
              skillItem ? skillItem?.[input.name as keyof SkillDetails] : ""
            }
            onChange={(e) => {
              let obj = { ...skillItem };
              obj[input.name as keyof SkillDetails] = e.target.value;
              setSkillItem(obj);
            }}
          />
        ))}
        <DeleteButton
          onClick={() => {
            onDeleteSkill(identifier);
          }}
        />
      </div>
    </>
  );
};

export default function Skills() {
  const [resumeData, setResumeDataState] = useRecoilState(resumeDataAtom);
  const { skillDetails } = resumeData;
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const onChangeSkillData = ({
    idx,
    skillObj,
  }: {
    idx: number;
    skillObj: SkillDetails;
  }) => {
    const data = [...skillDetails];
    data[idx] = skillObj;
    setResumeDataState({ ...resumeData, skillDetails: data });
  };

  const onDeleteSkill = (idx: number) => {
    const data = [...skillDetails];
    data.splice(idx, 1);
    setResumeDataState({ ...resumeData, skillDetails: data });
  };

  return (
    <>
      <form className="w-1/2 h-full" onSubmit={onFormSubmit}>
        <div className="w-full  grid grid-cols-1 gap-3 mt-10">
          <Button
            type="button"
            className="w-1/5 justify-self-end dark:bg-yellow-500 dark:hover:bg-yellow-700"
            onClick={() => {
              const data = [...skillDetails];
              data.push({});
              setResumeDataState({ ...resumeData, skillDetails: data });
            }}
          >
            + Add
          </Button>
          {skillDetails?.map((data, index) => (
            <SkillItem
              key={index}
              identifier={index}
              skillData={data}
              onChangeSkillData={onChangeSkillData}
              onDeleteSkill={onDeleteSkill}
            />
          ))}
        </div>
        <ButtonCombo
          onBackClick={() => {
            router.push("./achievements");
          }}
        />
      </form>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

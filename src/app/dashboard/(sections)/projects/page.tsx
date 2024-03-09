"use client";
import { ProjectDetails } from "@/types/types";
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
  { name: "Project Name", type: "text", placeholder: "Resume Crafter" },
  { name: "Tech", type: "text", placeholder: "Software Developer" },
  { name: "Link", type: "url", placeholder: "pune, india" },
];

const ProjectItem = ({
  onChange,
  identifier,
  onDeleteExperience,
  project,
}: {
  onChange: (props: {
    idx: number;
    projectItem: ProjectDetails | undefined;
  }) => void;
  identifier: number;
  onDeleteExperience: (idx: number) => void;
  project: ProjectDetails;
}) => {
  let [projectItem, setProjectItem] = useState<ProjectDetails>(project);

  useEffect(() => {
    onChange({ idx: identifier, projectItem });
  }, [projectItem]);

  const handlerAddNewDescription = () => {
    const data = { ...projectItem };
    console.log(data);
    if (Array.isArray(data.descriptions)) {
      data.descriptions = [...data.descriptions];
      data.descriptions.push("");
    }
    setProjectItem(data);
  };

  const onRemoveDescription = (idx: number) => {
    const data = { ...projectItem };
    if (Array.isArray(data.descriptions)) {
      data.descriptions = [...data.descriptions];
      data.descriptions.splice(idx, 1);
    }
    setProjectItem(data);
  };

  const handlerDescriptionChange = (idx: number, text: string) => {
    const data = { ...projectItem };
    if (Array.isArray(data.descriptions)) {
      data.descriptions = [...data.descriptions];
      data.descriptions[idx] = text;
    }
    setProjectItem(data);
  };

  return (
    <>
      <DeleteButton
        onClick={() => {
          onDeleteExperience(identifier);
        }}
      />
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
        {inputs.map((input, index) => (
          <InputWithLabel
            key={index}
            name={input.name}
            type={input.type}
            value={project?.[input.name as keyof ProjectDetails]?.toString() || ''}
            placeholder={input.placeholder}
            onChange={(e) => {
              const data = { ...projectItem };
              data[input.name as keyof ProjectDetails] = e.target.value;
              setProjectItem(data);
            }}
          />
        ))}
      </div>
      {Array.isArray(projectItem?.descriptions) &&
        projectItem?.descriptions?.map((description, idx) => {
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

export default function Project() {
  const [resumeData, setResumeDataState] = useRecoilState(resumeDataAtom);
  const { projectDetails } = resumeData;
  const router = useRouter();

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("./achievements");
  };

  const onChange = (props: {
    idx: number;
    projectItem: ProjectDetails | undefined;
  }) => {
    if (props.projectItem !== undefined) {
      const data = [...projectDetails];
      data[props.idx] = props.projectItem;
      setResumeDataState({ ...resumeData, projectDetails: data });
    }
  };

  const onDeleteExperience = (idx: number) => {
    const data = [...projectDetails];
    data.splice(idx, 1);
    setResumeDataState({ ...resumeData, projectDetails: data });
  };

  return (
    <form className="w-1/2 h-full" onSubmit={onFormSubmit}>
      <div className="w-full  grid grid-cols-1 gap-3 mt-10">
        {projectDetails?.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            identifier={index}
            onDeleteExperience={onDeleteExperience}
            onChange={onChange}
          />
        ))}
        <Button
          type="button"
          className="w-1/5 justify-self-end dark:bg-yellow-500 dark:hover:bg-yellow-700 mt-5"
          disabled={projectDetails?.length === 2 || false}
          onClick={() => {
            const data = [...projectDetails];
            data.push({
              descriptions: [""],
            });
            setResumeDataState({ ...resumeData, projectDetails: data });
          }}
        >
          + Add Project
        </Button>
      </div>

      <ButtonCombo
        onBackClick={() => {
          router.push("./achievements");
        }}
      />
    </form>
  );
}

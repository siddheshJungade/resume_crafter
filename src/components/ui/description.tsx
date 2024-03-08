import { MdRemove } from "react-icons/md";
import { Button } from "./button";
import { Input } from "./input";
import { ChangeEventHandler } from "react";

export const Description = (props: {description:string,onRemove?: () => void,onTextChange?: ChangeEventHandler<HTMLInputElement>}) => {
  return (
    <div className="w-full flex mt-2">
      <Input
        type="text"
        value={props.description}
        className="mr-2"
        placeholder="Develope Node js api with microservice approach"
        onChange={props.onTextChange}
      />

      <Button
        type='button'
        className="bg-red-700 col-span-1/2 justify-self-end hover:bg-red-500"
        onClick={props.onRemove}
      >
        <MdRemove className="dark:text-white" />
      </Button>
    </div>
  );
};

import { MdRemove } from "react-icons/md";
import { Button } from "./button";
import { Input } from "./input";

export const Description = (props: {onClick?: () => void}) => {
  return (
    <div className="w-full flex mt-2">
      <Input
        type="text"
        className="mr-2"
        placeholder="Develope Node js api with microservice approach"
      />

      <Button
        className="bg-red-700 col-span-1/2 justify-self-end hover:bg-red-500"
        onClick={props.onClick}
      >
        <MdRemove className="dark:text-white" />
      </Button>
    </div>
  );
};

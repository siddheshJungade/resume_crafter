import { Button } from "./button";
import { FiTrash } from "react-icons/fi";

export const DeleteButton = (props: { onClick?: () => void }) => {
  return (
    <Button className="bg-red-700 col-span-1/2 justify-self-end hover:bg-red-500" onClick={props.onClick} >
      <FiTrash className="dark:text-white" />
    </Button>
  );
};

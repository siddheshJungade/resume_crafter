import { Button } from "./button";

export const ButtonCombo = (props: {onBackClick?: () => void}) => {
  return (
    <div className="w-full grid grid-cols-2 gap-3 my-20">
      <Button
        className="w-full md:w-20 bg-blue-500 hover:bg-blue-700 justify-self-start"
        type="button"
        onClick={props.onBackClick}
      >
        Back
      </Button>
      <Button className="w-full md:w-20 col-span-1/2 justify-self-end" type="submit">
        Next
      </Button>
    </div>
  );
};

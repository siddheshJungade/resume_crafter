import { Button } from "./button";

export const DescriptionButton = (props: {onClick?: () => void}) => {
  return (
    <Button className="justify-self-start" type="button" onClick={props.onClick}>
       Add description
    </Button>
  );
};

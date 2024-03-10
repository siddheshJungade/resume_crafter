import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./input";

export const ModalComponent = (props: {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
}) => {
  return (
    <Dialog open={props.showModal} onOpenChange={props.setShowModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Let's Craft Your Resume</DialogTitle>
          <DialogDescription>
            Support developers by donating when generating your resume, no
            pressure.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={() => alert("Run API")}>
            Donate & Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

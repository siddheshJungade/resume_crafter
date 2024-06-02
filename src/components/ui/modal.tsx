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
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRecoilState } from "recoil";
import { isAPIRunningAtom } from "@/recoil/atom";

export const ModalComponent = (props: {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  postCreateResumeHandler?: () => void;
}) => {

  const [isLoading,setIsLoading ] = useRecoilState(isAPIRunningAtom)
  

  return (
    <Dialog open={props.showModal} onOpenChange={props.setShowModal}>
      <DialogContent className="mx-2">
        <DialogHeader>
          <DialogTitle>Let's Craft Your Resume</DialogTitle>
          <DialogDescription>
            Support developers by donating when generating your resume, no
            pressure.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={props?.postCreateResumeHandler} disabled={isLoading} >
            {
              isLoading && <> <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Please Wait </> || "Create"
            }
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

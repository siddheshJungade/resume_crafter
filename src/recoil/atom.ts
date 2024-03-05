import { ResumeData } from "@/app/types/types";
import { atom } from "recoil";

export const resumeDataAtom = atom<ResumeData>({
    key: 'resumeDataState',
    default: {}
})
import { ResumeData } from "@/types/types";
import { atom } from "recoil";
import { PersistStorage, recoilPersist } from "recoil-persist";

const sessionStorage: PersistStorage | undefined = typeof window !== `undefined` ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({ key: 'resumeData', storage: sessionStorage });


export const resumeDataAtom = atom<ResumeData>({
    key: 'resumeDataState',
    default: {
        educationDetails: [{}],
        experienceDetails: [{
            descriptions: [""]
        }],
        projectDetails: [{
            descriptions: [""]

        }],
        achievementDetails: [{
            descriptions: [""]
        }],
        skillDetails: [{}]
    },
    effects_UNSTABLE: [persistAtom]
})


export const isAPIRunningAtom = atom<boolean>({
    key: 'isAPIRunning',
    default: false 
})
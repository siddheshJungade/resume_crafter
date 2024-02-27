import { atom } from "recoil";

export const data = atom<Object>({
    key: 'resumeDataAtom',
    default: {}
})
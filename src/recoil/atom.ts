import { atom } from "recoil";

export const resumeDataState = atom<Object | null >({
    key: 'resumeDataState',
    default: null
})
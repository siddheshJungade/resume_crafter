


export type PersonalDetailsData  = {
    [key: string]: string;
}

export type EducationDetails = {
    [key: string]: string;
}





export type ExperienceDetails = {
    [key: string]: string | string[]
}


export interface ResumeData {
    personalDetails?: PersonalDetailsData,
    educationDetails: EducationDetails[] 
    experienceDetails: ExperienceDetails[]
}
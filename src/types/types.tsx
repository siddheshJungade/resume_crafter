


export type PersonalDetailsData  = {
    [key: string]: string;
}

export type EducationDetails = {
    [key: string]: string;
}





export type ExperienceDetails = {
    Company?: string,
    Role?: String,
    Location?: string,
    Date?: string,
    description?: string[] | string
}


export interface ResumeData {
    personalDetails?: PersonalDetailsData,
    educationDetails: EducationDetails[] 
    experienceDetails: ExperienceDetails[]
}



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
    descriptions?: string[] | string
}

export type ProjectDetails = {
    [key: string]: string | string[]
}

export type AchievementDetails = {
    Achievements?: string,
    descriptions?: string[] | string
}

export interface ResumeData {
    personalDetails?: PersonalDetailsData,
    educationDetails: EducationDetails[] 
    experienceDetails: ExperienceDetails[]
    projectDetails: ProjectDetails[],
    achievementDetails: AchievementDetails[]

}



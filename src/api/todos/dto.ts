

export type metricsDTO = {

    names: string;
    values: number;
}

export type CriteriaDTO = {
    workable: number;
    functionalRequirements: number;
    manufacturability: number;
    presentation: number;
    potential: number;
}

export type FetchHHCardDTO = {
    avatarUrl: string;
    lastName: string;
    firstName: string;
    patronymic: string;
    command: string;
    roleInCommand: string;
    rating: number;
    criteria: CriteriaDTO;
}
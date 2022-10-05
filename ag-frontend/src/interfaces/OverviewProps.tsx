export interface OverviewHeaderProps{
    OverviewHeaderList: {
        total: number;
        abnormaly: string;
        total_ab: number;
        ablv0: number;
        ablv1: number;
        ablv2: number;
        ablv3: number;
    }
}

export interface OverviewPredictProps{
    OverviewPredictList: {
        date: string;
        name: string;
        type: string;
        details: string;
        other: string;
        chance: string;
    }[]
}
/*
export interface OverviewProps{
    OverviewList: {
        total: number;
        abnormaly: string;
        total_ab: number;
        ablv0: number;
        ablv1: number;
        ablv2: number;
        ablv3: number;
    }[]
}
*/
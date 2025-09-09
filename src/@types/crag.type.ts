export type Crag = {
    id: number;
    name: string;
    city: string;
    postalCode: string;
    lat: number;
    lon: number;
    altitude: number;
    rockType: string;
    minGrade: string;
    maxGrade: string;
    exposure: number;
    favorableSeasons: string[];
    orientation: string[];
    photoUrl: string;
    thumbnailUrl: string;
}
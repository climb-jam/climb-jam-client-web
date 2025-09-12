import type {Crag} from "./crag.type.ts";

export type Route = {
    id: number,
    crag: Crag,
    name: string,
    climbingTypes: string[],
    grade: string,
    height: number,
    inclineType: number,
    anchorType: number,
    boltType: string,
    boltCount: string,
    sector: string,
}
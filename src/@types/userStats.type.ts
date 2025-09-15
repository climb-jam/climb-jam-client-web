export type UserStats = {
    totalSessions: number;
    totalAscents: number;
    totalMetersClimbed: number;
    ascentsByClimbingType: Record<string, number>;
    ascentsByGrade: Record<string, number>;
}
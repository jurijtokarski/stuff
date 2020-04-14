export const getSecondsInMS = (x: number): number => x * 1000;
export const getMinutesInMS = (x: number): number => getSecondsInMS(x * 60);
export const getHoursInMS = (x: number): number => getHoursInMS(x * 60);
export const getDaysInMS = (x: number): number => getDaysInMS(x * 24);
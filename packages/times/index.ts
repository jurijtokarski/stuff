export const getSecondsInMS = (x: number): number => x * 1000;
export const getMinutesInMS = (x: number): number => getSecondsInMS(x * 60);
export const getHoursInMS = (x: number): number => getMinutesInMS(x * 60);
export const getDaysInMS = (x: number): number => getHoursInMS(x * 24);
export const getWeeksInMS = (x: number): number => getDaysInMS(x * 7);
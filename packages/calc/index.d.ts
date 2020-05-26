export declare const round: (value: number, precision: number) => number;
export declare const sum: (array: number[]) => number;
export declare const average: (array: number[]) => number;
export declare const max: (array: number[]) => number;
export declare const min: (array: number[]) => number;
export declare const unique: <T = any>(array: T[]) => T[];
export declare const group: <T>(array: T[], size: number) => T[][];
export declare const timeFrames: (start: number, max: number, gap: number, useMaxAsLastItem?: boolean | undefined) => [number, number][];

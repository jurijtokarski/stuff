export const round = (value: number, precision: number) => Number(value.toFixed(precision));

export const sum = (array: number[]): number => array.reduce((result, value) => result + value, 0)

export const average = (array: number[]): number => sum(array) / array.length;

export const max = (array: number[]): number => Math.max(...array);

export const min = (array: number[]): number => Math.min(...array);

export const unique = <T = any>(array: T[]): T[] => [...new Set(array)];

export const ofLength = (length: number): undefined[] => Array.from<undefined>({ length });

export const randomInRange = (from: number, to: number, precision?: number): number => round(Math.random() * (to - from) + from, precision || 0);

export const randomInArray = <T = any>(array: T[]) => array[Math.floor((Math.random() * array.length))];

export const group = <T>(array: T[], size: number): T[][] => array.reduce<T[][]>((result, element, index) => {
  if (index % size) {
    result[result.length - 1].push(element);
  } else {
    result.push([element]);
  }
  return result;
}, []);

export const frames = (start: number, max: number, gap: number, useMaxAsLastItem?: boolean): [number, number][] => {
  const a: [number, number][] = [];

  for (let i = start; i < max; i = i + gap) {
    const next = i + gap;

    if (next > max) {
      if (useMaxAsLastItem) {
        a.push([i, max])
      } else {
        continue;
      }
    } else {
      a.push([i, next])
    }
  }

  return a;
}

// alias
export const timeFrames = frames;
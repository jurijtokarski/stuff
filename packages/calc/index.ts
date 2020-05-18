export const round = (value: number, precision: number) => Number(value.toFixed(precision));

export const sum = (array: number[]): number => array.reduce((result, value) => result + value, 0)

export const average = (array: number[]): number => sum(array) / array.length;

export const group = <T>(array: T[], size: number): T[][] => array.reduce<T[][]>((result, element, index) => {
  if (index % size) {
    result[result.length - 1].push(element);
  } else {
    result.push([element]);
  }
  return result;
}, []);
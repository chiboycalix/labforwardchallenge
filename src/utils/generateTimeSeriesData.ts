/** @format */

export const generateTimeSeriesData = (max: number, min: number): number[] => {
  let randomIntegerArray = [];
  for (let i = 0; i < 50; i++) {
    randomIntegerArray.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return randomIntegerArray;
};

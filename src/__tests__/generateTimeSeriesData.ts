import { generateTimeSeriesData } from '../utils/generateTimeSeriesData';

describe('generateTimeSeriesData', () => {
  it('should generate 50 positive integers between 1 and 15', () => {
    const data = generateTimeSeriesData(15, 1);
    expect(data.length).toEqual(50)
  })
  
  it('should be truthy if numbers generated are between 1 and 15', () => {
    const data = generateTimeSeriesData(15, 1);
    const betweenOneAndFifteen = data.includes(15);
    expect(betweenOneAndFifteen).toBeTruthy()
  })

  it('should be falsy if numbers generated are not between 1 and 15', () => {
    const data = generateTimeSeriesData(15, 1);
    const betweenOneAndFifteen = data.includes(16);
    expect(betweenOneAndFifteen).toBeFalsy();
  });
})

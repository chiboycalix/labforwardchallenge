/** @format */

import * as React from 'react';
import { RealTimeDataContext } from './RealTimeDataContext';
import { generateTimeSeriesData } from '../utils/generateTimeSeriesData';

type Props = { children: React.ReactNode };

const RealTimeDataProvider: React.FC<Props> = ({ children }) => {
  const [realTimeData, setRealTimeData] = React.useState<number[]>([]);
  const [signal, setSignal] = React.useState<number[]>([]);
  const [threshold, setThreshold] = React.useState<number>(10);

  React.useEffect(() => {
    handleGenerateSignalData(realTimeData, threshold);
  }, [realTimeData, threshold]);

  React.useEffect(() => {
    const newDataSetGeneratedAtIntervals = setInterval(() => {
      const dataSet = generateTimeSeriesData(15, 1);
      setRealTimeData(dataSet);
    }, 3000);
    return () => clearInterval(newDataSetGeneratedAtIntervals);
  }, []);

  const handleGenerateSignalData = (
    actualData: number[],
    threshold: number
  ): void => {
    const signalData = actualData.map((a) => (a > threshold ? 1 : 0));
    setSignal(signalData);
  };

  return (
    <RealTimeDataContext.Provider
      value={{ signal, setThreshold, realTimeData, threshold }}>
      {children}
    </RealTimeDataContext.Provider>
  );
};

export default RealTimeDataProvider;

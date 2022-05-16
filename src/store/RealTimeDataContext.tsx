import * as React from 'react';

interface IRealTimeDataContext {
  signal: number[];
  setThreshold: (zscore: number) => void;
  realTimeData: number[];
  threshold: number;
}
export const RealTimeDataContext = React.createContext<IRealTimeDataContext|any>({});

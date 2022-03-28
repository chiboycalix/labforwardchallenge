import * as React from 'react';
import { RealTimeDataContext } from '../../../store/RealTimeDataContext';
import { Input } from '../../../components';
import ActualChart from '../../charts/components/actual-data-chart.component';
import SignalChart from '../../charts/components/signal-data-chart.components';

const Home = () => {
  const { signal, setThreshold, realTimeData, threshold } = React.useContext(RealTimeDataContext);
 
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    let threshold = parseInt((event.target as HTMLInputElement).value) || 0;
    if (threshold <= 0) {
      threshold = 0;
    }
    setThreshold(threshold);
  };

    return (
      <div className="w-full px-5 py-5">
        <div className="">
          <div className="px-3 pt-5">
            <Input
              type="number"
              placeholder="Enter threshold"
              onChange={handleChange}
              value={threshold}
              id="threshold"
              label="Threshold"
            />
          </div>

          {realTimeData.length === 0 ? (
            <>
              <ActualChart title="Actual Data" data={new Array(50).fill(0)} />
              <SignalChart title="Signal" data={new Array(50).fill(0)} />
            </>
          ) : (
            <>
              <ActualChart title="Actual Data" data={realTimeData} />
              <SignalChart title="Signal" data={signal} />
            </>
          )}
        </div>
      </div>
    );
}
export default Home;

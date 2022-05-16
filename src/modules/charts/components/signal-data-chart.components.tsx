import * as React from 'react';
import Chart from 'react-apexcharts';
import { ChartOptions } from '../../../constants';

import { CHART_HEIGHT, CHART_TYPE } from '../constants';

interface IChartProps {
  title: string;
  data: number[]
}

const SignalDataChart = ({ title, data }: IChartProps) => {

  return (
    <div>
      <Chart
        series={[{ name: 'Signal Data', data: data }]}
        type={CHART_TYPE}
        options={ChartOptions(title)}
        height={CHART_HEIGHT}
      />
    </div>
  );
};

export default SignalDataChart;

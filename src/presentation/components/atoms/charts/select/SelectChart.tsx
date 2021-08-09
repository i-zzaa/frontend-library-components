import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SelectType } from './Select.types';
import { StyledSelect } from './Select.styles';
import Line from '../line/Line';
import Bar from '../bar/Bar';
import Pie from '../pie/Pie';

interface Props {
  data?: any
  colors?: string[]
}

const SelectChart: FC<Props> = ({data, colors, ...args}: Props): RE => {
  return (
    <div>
      {applyColors(data, colors)}
      <div>
        {renderOptions(args.control, data)}
      </div>
    </div>
  );
};

const applyColors = (data: any, colors: any) => {
  if (data == undefined) return data
  colors.forEach((color: string, i: any) => {
    data.datasets[i].backgroundColor = color
  });
}

const renderOptions = (option: string, data: any) => {
  switch (option) {
    case 'line':
      return <Line data={data}/>
    case 'bar':
      return <Bar data={data}/>
    case 'pie':
      return <Pie data={data}/>
  }
}

export default SelectChart;
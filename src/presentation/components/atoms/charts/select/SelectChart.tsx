import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SelectType } from './Select.types';
import { StyledSelect } from './Select.styles';
import Line from '../line/Line';
import Bar from '../bar/Bar';
import Pie from '../pie/Pie';

interface Props {
  data?: any
  label?: string;
  options?: string[];
  optionsState: string;
  disabled?: boolean;
  onClick?(): void;
  styles?: Record<string, string>;
}

const SelectChart: FC<Props> = ({data, ...props }: Props): RE => {
  return (
    <div>
      <div>{}</div>
      <select value={props.optionsState}>
        <option value="L"><Line data={data}/></option>
        <option value="B"><Bar data={data}/></option>
        <option value="P"><Pie data={data}/></option>
      </select>
    </div>
  );
};

export default SelectChart;
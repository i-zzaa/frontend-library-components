import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {Pie as P} from 'react-chartjs-2';


interface Props {
    data: {
        labels: string[],
        datasets: {
            label: string,
            data: number[] | string[] | any[],
            backgroundColor: string
        }[]
    }
}

const Pie: FC<Props> = ({ data }: Props): RE => {

    return (
        <div className="App">
            <P 
                data={data}
            />
        </div>
    );
  };

export default Pie;
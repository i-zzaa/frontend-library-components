import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {Line as L} from 'react-chartjs-2';


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

const Line: FC<Props> = ({ data }: Props): RE => {

    return (
        <div className="App">
            <L 
                data={data}
            />
        </div>
    );
  };

export default Line;
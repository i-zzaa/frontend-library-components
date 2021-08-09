import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {Bar as B} from 'react-chartjs-2';


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

const Bar: FC<Props> = ({ data }: Props): RE => {

    return (
        <div className="App">
            <B 
                data={data}
            />
        </div>
    );
  };

export default Bar;
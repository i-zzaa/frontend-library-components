import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import Bar from '../../src/presentation/components/atoms/charts/bar/Bar';
import { faTrash, faCheck, faComments } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Atom/Bar',
  component: Bar
}

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41],
            backgroundColor: "rgba(67, 235, 52,0.8)",
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51],
            backgroundColor: "rgba(75,192,192,0.8)",
        }
    ]
};


const Template: Story = (args) => <Bar data={data}/>;
export const basic = Template.bind({});
basic.args = {
    data: data
};
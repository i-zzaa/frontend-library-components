import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import SelectChart from '../../src/presentation/components/atoms/charts/select/SelectChart';
import { faTrash, faCheck, faComments } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Atom/SelectChart',
  component: SelectChart,
  argTypes: {
      control: {
        type: "select",
        defaultValue: 'line',
        options: {
            Line: 'line',
            Bar: 'bar',
            Pie: 'pie',
        },
      }
  },
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

const colors = [
    "rgba(97, 122, 212,1)",
    "rgba(75,192,192,0.8)"
]

const Template: Story = (args) => <SelectChart data={data} colors={colors} {...args}/>;
export const basic = Template.bind({});

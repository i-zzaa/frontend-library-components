import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import SelectChart from '../../src/presentation/components/atoms/charts/select/SelectChart';
import { faTrash, faCheck, faComments } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Atom/SelectChart',
  component: SelectChart,
}


const Template: Story = (args) => <SelectChart optionsState=''/>;
export const basic = Template.bind({});
basic.args = {
    optionsState: 'B'
};
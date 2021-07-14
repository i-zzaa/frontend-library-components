import React from 'react';
import { Story } from '@storybook/react';

import { Colors } from '../../src/presentation/styles/colors.enum';
import InputItem from '../../src/presentation/components/atoms/input/InputItem';
import { faSearch, faCheck } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Atom/Input',
  component: InputItem,
  argTypes: {
    style: { borderColor: { control: 'color' }},
    iconLeft: {
      control: {
        type: "select",
        options: {
            Without: null,
            SearchIcon: faSearch,
            CheckIcon: faCheck,
        },
      }
    }
  },
};

const Template: Story = (args) => <InputItem {...args} />;

export const basic = Template.bind({});
basic.args = { 
  labelName: 'InputItem', 
  disabled: false,
  style: {borderColor: Colors.WATER, borderRadius: '3px'},
  iconLeft: null
};

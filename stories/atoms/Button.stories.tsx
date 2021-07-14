import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import { Colors } from '../../src/presentation/styles/colors.enum';
import Button from '../../src/presentation/components/atoms/button/Button';
// import Button from '@/presentation/components/atoms/button/Button';
import { faTrash, faCheck, faComments } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Atom/Button',
  component: Button,
  argTypes: {
    style: { borderColor: { control: 'color' }},
    onClick: {action: 'clicked'},
    iconLeft: {
      control: {
        type: "select",
        options: {
            Without: null,
            TrashIcon: faTrash,
            CheckIcon: faCheck,
            Comment: faComments,
        },
      }
    }
  },
};

const Template: Story = (args) => <Button {...args} />;

export const basic = Template.bind({});
basic.args = { 
  label: 'Button', 
  disabled: false,
  style: {borderColor: Colors.GOLD},
  onClick: action('clicked'),
};

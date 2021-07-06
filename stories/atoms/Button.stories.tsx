import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../src/presentation/components/atoms/button/Button';
// import Button from '@/presentation/components/atoms/button/Button';

storiesOf('Button', module).add('Default', () => <Button>Default</Button>);

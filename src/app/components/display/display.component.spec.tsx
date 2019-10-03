// - display the count of `balls` and `strikes` for the at-bat.
// - should be updated when the user records activity on the `Dashboard` component.

import React from 'react';
import { render } from '@testing-library/react';

import { Display } from './display.component';

test('renders without errors', () => {
  const { baseElement } = render(<Display />);
  expect(baseElement).toBeTruthy();
});

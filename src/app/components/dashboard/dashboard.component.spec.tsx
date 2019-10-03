// - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - there is **NO** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the `Display` component.

import React from 'react';
import { render } from '@testing-library/react';

import { Dashboard } from './dashboard.component';

test('renders without errors', () => {
  const { baseElement } = render(<Dashboard />);
  expect(baseElement).toBeTruthy();
});

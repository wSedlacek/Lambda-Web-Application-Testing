import React from 'react';
import { render } from '@testing-library/react';

import { Display } from './display.component';

const TestBed = () => <Display balls={3} strikes={2} outs={1} />;

test('renders without errors', () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement).toBeTruthy();
});

test('show balls based on prop', () => {
  const { getByText } = render(<TestBed />);
  const balls = getByText(/balls/i);
  expect(balls).toBeTruthy();
  expect(balls.innerHTML.includes('3')).toBeTruthy();
});

test('show strikes based on prop', () => {
  const { getByText } = render(<TestBed />);
  const strikes = getByText(/strikes/i);
  expect(strikes).toBeTruthy();
  expect(strikes.innerHTML.includes('2')).toBeTruthy();
});

test('show outs based on prop', () => {
  const { getByText } = render(<TestBed />);
  const outs = getByText(/outs/i);
  expect(outs).toBeTruthy();
  expect(outs.innerHTML.includes('1')).toBeTruthy();
});

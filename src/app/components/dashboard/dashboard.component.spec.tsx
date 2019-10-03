import React from 'react';
import { render } from '@testing-library/react';

import { Dashboard } from './dashboard.component';

const stub = () => {};
const TestBed = () => <Dashboard out={stub} strike={stub} foul={stub} ball={stub} hit={stub} />;

test('renders without errors', () => {
  const { baseElement } = render(<TestBed />);
  expect(baseElement).toBeTruthy();
});

test('provides a out button', () => {
  const { getByText } = render(<TestBed />);
  expect(getByText(/out/i)).toBeTruthy();
});

test('provides a strike button', () => {
  const { getByText } = render(<TestBed />);
  expect(getByText(/strike/i)).toBeTruthy();
});

test('provides a foul button', () => {
  const { getByText } = render(<TestBed />);
  expect(getByText(/foul/i)).toBeTruthy();
});

test('provides a ball button', () => {
  const { getByText } = render(<TestBed />);
  expect(getByText(/ball/i)).toBeTruthy();
});

test('provides a hit button', () => {
  const { getByText } = render(<TestBed />);
  expect(getByText(/hit/i)).toBeTruthy();
});

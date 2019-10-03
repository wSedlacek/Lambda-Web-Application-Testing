import { renderHook, act } from '@testing-library/react-hooks';

import { useScoreBoard } from './score-board.hook';

test('defaults to 0', () => {
  const { result } = renderHook(() => useScoreBoard());
  const [scoreBoard] = result.current;
  expect(scoreBoard.balls).toBe(0);
  expect(scoreBoard.strikes).toBe(0);
  expect(scoreBoard.outs).toBe(0);
});

test('balls increments', () => {
  const { result } = renderHook(() => useScoreBoard());
  const [, { ball }] = result.current;
  act(() => {
    ball();
  });

  const [{ balls }] = result.current;
  expect(balls).toBe(1);
});

test('strikes increments', () => {
  const { result } = renderHook(() => useScoreBoard());
  const [, { strike }] = result.current;
  act(() => {
    strike();
  });

  const [{ strikes }] = result.current;
  expect(strikes).toBe(1);
});

test('balls and strikes reset to 0 when a player reaches 3 strikes and outs increases', () => {
  const { result } = renderHook(() => useScoreBoard());

  for (let i = 0; i < 3; i++) {
    act(() => {
      const { strike } = result.current[1];
      strike();
    });
  }

  const [scoreBoard] = result.current;
  expect(scoreBoard.balls).toBe(0);
  expect(scoreBoard.strikes).toBe(0);
  expect(scoreBoard.outs).toBe(1);
});

test('a `foul` increases strikes up to 2, but no further', () => {
  const { result } = renderHook(() => useScoreBoard());

  for (let i = 0; i < 4; i++) {
    act(() => {
      const { foul } = result.current[1];
      foul();
    });
  }

  const [scoreBoard] = result.current;
  expect(scoreBoard.balls).toBe(0);
  expect(scoreBoard.strikes).toBe(2);
  expect(scoreBoard.outs).toBe(0);
});

test('balls and strikes reset to 0 when a player reaches 4 balls and outs increases', () => {
  const { result } = renderHook(() => useScoreBoard());

  for (let i = 0; i < 4; i++) {
    act(() => {
      const { ball } = result.current[1];
      ball();
    });
  }

  const [scoreBoard] = result.current;
  expect(scoreBoard.balls).toBe(0);
  expect(scoreBoard.strikes).toBe(0);
  expect(scoreBoard.outs).toBe(0);
});

test('hit resets strikes and balls to 0', () => {
  const { result } = renderHook(() => useScoreBoard({ balls: 3, strikes: 2, outs: 0 }));
  const [, { hit }] = result.current;
  act(() => {
    hit();
  });

  const [{ balls, strikes }] = result.current;
  expect(balls).toBe(0);
  expect(strikes).toBe(0);
});

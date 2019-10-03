// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

import { renderHook, act } from '@testing-library/react-hooks';

import { useScoreBoard } from './score-board.hook';

test('defaults to 0', () => {
  const { result } = renderHook(() => useScoreBoard());
  const [scoreBoard, setScoreBoard] = result.current;
  expect(scoreBoard.balls).toBe(0);
  expect(scoreBoard.strikes).toBe(0);
  expect(scoreBoard.strikes).toBe(0);
});

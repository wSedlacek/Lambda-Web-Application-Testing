import { useState } from 'react';
import { ScoreBoard } from '../../models/ScoreBoard';

const useScoreBoard = (initialValue?: ScoreBoard): [ScoreBoard, (value: ScoreBoard) => void] => {
  if (!initialValue) initialValue = {};

  const [balls, setBalls] = useState(initialValue.balls || 0);
  const [strikes, setStrikes] = useState(initialValue.strikes || 0);
  const [outs, setOuts] = useState(initialValue.outs || 0);

  const setScoreBoard = ({ balls, strikes, outs }: ScoreBoard) => {
    if (balls) setBalls(balls);
    if (strikes) setStrikes(strikes);
    if (outs) setOuts(outs);
  };

  return [{ balls, strikes, outs }, setScoreBoard];
};

export { useScoreBoard };

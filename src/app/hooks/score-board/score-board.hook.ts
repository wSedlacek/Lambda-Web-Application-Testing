import { useState } from 'react';
import { ScoreBoard, ScoreBoardActions } from '../../models/ScoreBoard';

const useScoreBoard = (initialValue?: ScoreBoard): [ScoreBoard, ScoreBoardActions] => {
  if (!initialValue) initialValue = { balls: 0, outs: 0, strikes: 0 };

  const [balls, setBalls] = useState(initialValue.balls || 0);
  const [strikes, setStrikes] = useState(initialValue.strikes || 0);
  const [outs, setOuts] = useState(initialValue.outs || 0);

  const out = () => {
    setOuts(outs + 1);
    if (outs >= 3) setOuts(0);
  };

  const ball = () => {
    const newVal = balls + 1;
    if (newVal >= 4) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(newVal);
    }
  };

  const strike = () => {
    const newVal = strikes + 1;
    if (newVal >= 3) {
      setStrikes(0);
      setBalls(0);
      out();
    } else {
      setStrikes(newVal);
    }
  };

  const foul = () => {
    if (strikes < 2) {
      strike();
    }
  };

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  };

  return [{ balls, strikes, outs }, { out, ball, strike, foul, hit }];
};

export { useScoreBoard };

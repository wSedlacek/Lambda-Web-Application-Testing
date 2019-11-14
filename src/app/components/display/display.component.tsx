import React from 'react';

import { ScoreBoard } from '../../models/ScoreBoard';

const Display = ({ balls, strikes, outs }: ScoreBoard) => {
  return (
    <div>
      <div>Balls: {balls}</div>
      <div>Strikes: {strikes}</div>
      <div>Outs: {outs}</div>
    </div>
  );
};

export { Display };

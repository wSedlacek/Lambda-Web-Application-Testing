import React from 'react';

import { ScoreBoardActions } from '../../models/ScoreBoard';

const Dashboard = ({ out, strike, foul, ball, hit }: ScoreBoardActions) => {
  return (
    <div>
      <button onClick={out}>Out</button>
      <button onClick={strike}>Strike</button>
      <button onClick={foul}>Foul</button>
      <button onClick={ball}>Ball</button>
      <button onClick={hit}>Hit</button>
    </div>
  );
};

export { Dashboard };

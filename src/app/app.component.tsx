import React from 'react';

import { useScoreBoard } from './hooks/score-board/score-board.hook';
import { Display } from './components/display/display.component';
import { Dashboard } from './components/dashboard/dashboard.component';

const App = () => {
  const [{ balls, strikes, outs }, { out, ball, strike, foul, hit }] = useScoreBoard();

  return (
    <>
      <Display balls={balls} strikes={strikes} outs={outs} />
      <Dashboard out={out} ball={ball} strike={strike} foul={foul} hit={hit} />
    </>
  );
};

export { App };

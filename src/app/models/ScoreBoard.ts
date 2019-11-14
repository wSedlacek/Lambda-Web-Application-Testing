export interface ScoreBoard {
  balls: number;
  strikes: number;
  outs: number;
}

export type ScoreBoardActions = {
  out: () => void;
  ball: () => void;
  strike: () => void;
  foul: () => void;
  hit: () => void;
};

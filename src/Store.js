import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  player1Name: "",
  player2Name: "",
  setPlayer1Name: (player1Name) => set(() => ({ player1Name: player1Name })),
  setPlayer2Name: (player2Name) => set(() => ({ player2Name: player2Name })),
}));

export const SquareState = {
  Init: "Init",
  Exx: "Exx",
  Ooo: "Ooo",
};

const initialGameState = [
  [SquareState.Init, SquareState.Init, SquareState.Init],
  [SquareState.Init, SquareState.Init, SquareState.Init],
  [SquareState.Init, SquareState.Init, SquareState.Init],
];

export const useGameStore = create((set) => ({
  gameState: initialGameState,
  setGameState: (gameState) =>
    set(() => ({
      gameState,
    })),
}));

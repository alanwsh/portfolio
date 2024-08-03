
export type Game = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon: string;
  name: string;
};

export const games = [
  {
    href: '/games/ticTacToe',
    icon: "/tic-tac-toe.png",
    name: "Tic Tac Toe",
  },
  {
    href: '/games/hangman',
    icon: "/hangman.png",
    name: "Hangman",
  },
];

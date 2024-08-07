"use client";
import { Circle, Game, Player, Times, WinningLine } from "@/models/ticTacToe";
import { Face, Settings } from "@mui/icons-material";
import {
  Button,
  Chip,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { motion } from "framer-motion";
import Image from "next/image";
import RestartAlt from "@mui/icons-material/RestartAlt";
import GameBar from "../components/GameBar";
import { pick } from 'lodash';

export default function TicTacToe() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [bot, setBot] = useState<boolean>(false);

  const [boxes, setBoxes] = useState<(Player | null)[][]>(Game);

  const [currentPlayer, setCurrentPlayer] = useState<Player>(players[0]);
  const [winner, setWinner] = useState<WinningLine | null | "draw">(null);
  const handleClick = (rowIndex: number, colIndex: number) => {
    if (!currentPlayer?.bot) {
      // Prevent updating if the cell is already filled
      if (boxes[rowIndex][colIndex]) return;

      const updatedBoxes = boxes.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex ? currentPlayer : cell
        )
      );

      setBoxes(updatedBoxes);
      setCurrentPlayer(
        currentPlayer.id === players[0].id ? players[1] : players[0]
      );
    }
  };

  const gameVariants = {
    hidden: { opacity: 0, zIndex: -1, transition: { duration: 0.5 } },
    end: { opacity: 0.2, zIndex: 0, transition: { duration: 0.5 } },
    visible: { opacity: 1, zIndex: 1, transition: { duration: 0.5 } },
  };

  const _restartGame = () => {
    setBoxes(Game);
    setWinner(null);
    setCurrentPlayer(players[0]);
  };

  const _handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBot(event.target.checked);
  };

  useEffect(() => {
    const checkWinner = (board: (Player | null)[][]) => {
      // Check rows
      for (let i = 0; i < 3; i++) {
        let top: string;

        switch (i) {
          case 0:
            top = "15%";
            break;
          case 1:
            top = "50%";
            break;
          case 2:
            top = "82.5%";
            break;
          default:
            top = "0";
        }
        if (
          board[i][0] &&
          board[i][0] === board[i][1] &&
          board[i][1] === board[i][2]
        ) {
          return new WinningLine({
            width: "90%",
            height: "2px",
            top,
            left: "5%",
            winner: board[i][0],
          });
        }
      }

      // Check columns
      for (let i = 0; i < 3; i++) {
        if (
          board[0][i] &&
          board[0][i] === board[1][i] &&
          board[1][i] === board[2][i]
        ) {
          let left: string;

          switch (i) {
            case 0:
              left = "16.5%";
              break;
            case 1:
              left = "50%";
              break;
            case 2:
              left = "83.5%";
              break;
            default:
              left = "0";
          }
          return new WinningLine({
            width: "2px",
            height: "90%",
            top: "5%",
            left,
            winner: board[0][i],
          });
        }
      }
      // Check diagonals
      if (
        board[0][0] &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]
      ) {
        return new WinningLine({
          width: "2px",
          height: "120%",
          top: "-10%",
          left: "50%",
          winner: board[0][0],
          transform: "rotate(-45deg)",
        });
      }
      if (
        board[0][2] &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]
      ) {
        return new WinningLine({
          width: "2px",
          height: "120%",
          top: "-10%",
          left: "50%",
          winner: board[0][2],
          transform: "rotate(45deg)",
        });
      }
      // Check for draw
      const isDraw = board.every((row) => row.every((cell) => cell !== null));
      if (isDraw) {
        return "draw";
      }
      return null;
    };

    const winner = checkWinner(boxes);
    if (winner) {
      setWinner(winner);
    }
  }, [boxes]);

  useEffect(() => {
    if (bot) {
      setPlayers([
        {
          id: 1,
          color: "primary",
          name: "Player 1",
          iconColor: '#ff0055',
          icon: <Circle size={90} />,
        },
        {
          id: 2,
          color: "warning",
          name: "Bot",
          iconColor: '#00cc88',
          icon: <Times size={90} />,
          bot: true,
        },
      ]);
    } else {
      setPlayers([
        {
          id: 1,
          color: "primary",
          name: "Player 1",
          iconColor: '#ff0055',
          icon: <Circle size={90} color="#ff0055"/>,
        },
        {
          id: 2,
          name: "Player 2",
          color: "secondary",
          iconColor: '#00cc88',
          icon: <Times size={80} color="#00cc88" />,
        },
      ]);
    }
  }, [bot]);

  useEffect(() => {
    _restartGame();
  }, [players]);

  useEffect(() => {
    const _checkLineCompletingSoon = (line: (Player | null)[]) => {
      const opponentPlayer = players.find((p) => p.id !== currentPlayer.id); // Find the opponent
      if (!opponentPlayer) return null; // Return null if no opponent found

      // Check if there are exactly two of the opponent's symbols and one empty cell
      if (
        line.filter((cell) => cell && cell.bot === opponentPlayer.bot)
          .length === 2 &&
        line.includes(null)
      ) {
        // Find the index of the empty cell
        const colIndex = line.indexOf(null);
        return colIndex;
      }

      return null;
    };

    const _findBotMove = () => {
      // Check rows
      for (let i = 0; i < 3; i++) {
        const row = boxes[i];
        const colIndex = _checkLineCompletingSoon(row);
        if (colIndex !== null) return { row: i, col: colIndex };
      }

      // Check columns
      for (let i = 0; i < 3; i++) {
        const col = boxes.map((row) => row[i]);
        const rowIndex = _checkLineCompletingSoon(col);
        if (rowIndex !== null) return { row: rowIndex, col: i };
      }

      // Check diagonals
      const diag1 = [boxes[0][0], boxes[1][1], boxes[2][2]];
      const index1 = _checkLineCompletingSoon(diag1);
      if (index1 !== null) return { row: index1, col: index1 };

      const diag2 = [boxes[0][2], boxes[1][1], boxes[2][0]];
      const index2 = _checkLineCompletingSoon(diag2);
      if (index2 !== null) return { row: index2, col: 2 - index2 };

      return null;
    };

    const _performNextMove = () => {
      if (currentPlayer?.bot) {
        const opponent = players.find((p) => p.id !== currentPlayer.id);
        const move = _findBotMove();

        if (move) {
          const newBoxes = [...boxes];
          newBoxes[move.row][move.col] = currentPlayer;
          setBoxes(newBoxes);
          setCurrentPlayer(opponent!);
        } else {
          // If no blocking move, make a random move
          const emptyCells = [];
          for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
              if (!boxes[r][c]) {
                emptyCells.push({ row: r, col: c });
              }
            }
          }

          if (emptyCells.length > 0) {
            const randomMove =
              emptyCells[Math.floor(Math.random() * emptyCells.length)];
            const newBoxes = [...boxes];
            newBoxes[randomMove.row][randomMove.col] = currentPlayer;
            setBoxes(newBoxes);
            setCurrentPlayer(opponent!);
          }
        }
      }
    };

    if (currentPlayer?.bot && !winner) {
      const timer = setTimeout(() => {
        _performNextMove();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentPlayer, boxes, players, winner]);

  return (
    <Grid container justifyContent="center" className="py-4">
      <div className="flex items-center">
        <Typography variant="h4" className="mr-2">
          Tic Tac Toe
        </Typography>
        <Image
          src="/tic-tac-toe.png"
          width={50}
          height={50}
          alt="Tic Tac Toe"
        />
      </div>
      <Grid container justifyContent="center" className="mt-8">
        <Grid item xs={12} md={4} xl={3} sx={{ px: { xs: 3, md: 0 } }}>
          <GameBar
            start={
              <Button
                variant="outlined"
                className="text-white border-white hover:border-white rounded-xl hidden md:flex"
                startIcon={<RestartAltIcon />}
                onClick={_restartGame}
              >
                Restart
              </Button>
            }
            center={
              <Chip
                icon={<Face />}
                label={currentPlayer?.name}
                color={currentPlayer?.color || "primary"}
                className="px-4"
              />
            }
            end={
              <>
                <div className="text-white border-white rounded-xl flex">
                  <FormControlLabel
                    value={bot}
                    control={
                      <Switch
                        color="primary"
                        checked={bot}
                        onChange={_handleSwitchChange}
                      />
                    }
                    label="Bot"
                    labelPlacement="end"
                  />
                </div>
                <IconButton
                  className="text-white border-white hover:border-white rounded-xl md:hidden"
                  onClick={_restartGame}
                >
                  <RestartAlt />
                </IconButton>
              </>
            }
          />
          <Paper
            elevation={3}
            style={{ padding: "16px", textAlign: "center" }}
            className="bg-gray-700"
          >
            <motion.div transition={{ duration: 0.3 }} className="relative">
              {/* Content container */}
              <motion.div
                className="content"
                variants={gameVariants}
                initial="visible"
                animate={winner ? "end" : "visible"}
              >
                {boxes.map((row, rowIndex) => (
                  <Grid container key={rowIndex} className="">
                    {row.map((cell, colIndex) => (
                      <Grid
                        item
                        xs={4}
                        key={colIndex}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid #ccc",
                          aspectRatio: 1,
                          cursor: "pointer",
                          fontSize: "2rem",
                        }}
                        onClick={() => handleClick(rowIndex, colIndex)}
                      >
                        {cell ? cell.icon : null}
                      </Grid>
                    ))}
                    {winner && winner !== "draw" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute"
                        style={{...pick(winner, ['top', 'left', 'width', 'height', 'transform']), backgroundColor: winner.winner?.iconColor}}
                      />
                    )}
                  </Grid>
                ))}
              </motion.div>
              <motion.div
                className=""
                initial="hidden"
                variants={gameVariants}
                animate={winner ? "visible" : "hidden"}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                }}
              >
                {winner && (
                  <div className="mt-[35%] md:mt-[40%]">
                    <Typography variant="h6" color="white">
                      {winner === "draw"
                        ? "It's a draw!"
                        : `${winner?.winner?.name} wins!`}
                    </Typography>
                    <Button
                      variant="outlined"
                      className="mt-2 rounded-full text-white border-white px-8 hover:border-white hover:bg-white hover:text-black"
                      onClick={_restartGame}
                    >
                      Restart
                    </Button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

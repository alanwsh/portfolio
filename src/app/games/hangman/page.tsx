"use client";
import {
  AppBar,
  Button,
  colors,
  Dialog,
  DialogContent,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { motion } from "framer-motion";
import Image from "next/image";
import VirtualKeyboard from "@/components/VirtualKeyboard";
import HangmanStepper from "./components/HangmanStepper";
import { Close } from "@mui/icons-material";
import { useAppContext } from "@/context/app";
import DarkButton from "@/components/general/DarkButton";
import GameBar from "../components/GameBar";

export default function Hangman() {
  const [word, setWord] = useState<string>("Alan".toUpperCase());
  const [guesses, setGuesses] = useState<Array<string>>([]);
  const [chances, setChances] = useState(6);
  const [gameEndModal, setGameEndModal] = useState(false);
  const { incrementLoading, decrementLoading } = useAppContext();

  const _restartGame = () => {
    setChances(6);
    setGuesses([]);
  };

  const _startNewGame = () => {
    incrementLoading();
    const categories = ["noun", "adjective", "animal"];
    const category = categories[Math.floor(Math.random() * categories.length)];

    fetch(`https://random-word-form.herokuapp.com/random/${category}`)
      .then((res) => {
        res.json().then((result) => {
          if (result && result.length > 0) {
            setWord(result[0].toUpperCase());
            decrementLoading();
          }
        });
      })
      .catch((err) => {
        setWord("programming".toUpperCase());
        decrementLoading();
      });
  };

  const _onKeyPressed = (string: string) => {
    if (!guesses.includes(string)) {
      setGuesses((prev) => [...prev, string]);
    }
  };

  const won = [...word].every((char) => guesses.includes(char));
  const lost = chances < 1;

  useEffect(() => {
    _startNewGame();
  }, []);

  useEffect(() => {
    const incorrectGuesses = guesses.filter((guess) => !word.includes(guess));
    setChances(6 - incorrectGuesses.length);
  }, [guesses]);

  useEffect(() => {
    _restartGame();
  }, [word]);

  useEffect(() => {
    setGameEndModal(won || lost);
  }, [won, lost]);

  return (
    <Grid container justifyContent="center" className="py-4">
      <div className="flex items-center">
        <Typography variant="h4">Hangman</Typography>
        <Image
          src="/hangman.png"
          width={50}
          height={50}
          alt="Hangman"
          className="rounded-full ml-2"
        />
      </div>
      <Grid container justifyContent="center" className="mt-8">
        <Grid item xs={12} md={6} sx={{ px: { xs: 3, md: 0 } }}>
            <GameBar
              start={
                <Button
                  variant="outlined"
                  className="text-white border-white hover:border-white rounded-xl"
                  startIcon={<RestartAltIcon />}
                  onClick={() => {
                    won ? _startNewGame() : _restartGame();
                  }}
                >
                  {won ? "New Game" : "Restart"}
                </Button>
              }
              end={
                <>
                  <motion.div
                    key={chances}
                    initial={{ scale: 2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Typography
                      variant="h4"
                      className={chances < 2 ? "text-red" : ""}
                    >
                      {chances}
                    </Typography>
                  </motion.div>
                  <Typography variant="caption" className="pl-2">
                    chances left
                  </Typography>
                </>
              }
            />
          <Paper
            elevation={3}
            style={{ padding: "16px", textAlign: "center" }}
            className="bg-gray-700"
          >
            <div className="flex-1 mb-4 text-center break-words">
              {[...word].map((char, index) =>
                guesses.includes(char) ? (
                  <span
                    className="text-white border-b border-white mx-1 px-2"
                    key={index}
                  >
                    {char}
                  </span>
                ) : (
                  <span
                    className="text-white border-b border-white mx-1 px-2 text-xl font-bold"
                    key={index}
                  >
                    ?
                  </span>
                )
              )}
            </div>
            <HangmanStepper chances={chances} />
            <div className="px-4 text-white">
              <VirtualKeyboard
                onKeyPress={_onKeyPressed}
                charactersOnly={true}
                disabledCharacters={guesses}
                disabledAll={lost || won}
                dark={true}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Dialog
        open={gameEndModal}
        keepMounted
        onClose={() => {
          setGameEndModal(false);
        }}
        sx={{ zIndex: 999, height: "100%" }}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent className="flex flex-col justify-center items-center">
          {won ? (
            <>
              <Image
                src="/congrats.png"
                width={150}
                height={150}
                alt="You won"
                priority
              />
              <Typography variant="body1" className="my-4">
                Congrats, you Won!
              </Typography>
              <div className="flex gap-x-2">
                <Button
                  variant="outlined"
                  className="text-white border-white hover:bg-white hover:text-black hover:border-white rounded-2xl mt-4"
                  startIcon={<RestartAltIcon />}
                  onClick={_startNewGame}
                >
                  {won ? "New Game" : "Restart"}
                </Button>
                <Button
                  variant="outlined"
                  className="text-white border-black border-white hover:bg-white hover:text-black hover:border-white rounded-2xl mt-4"
                  startIcon={<Close />}
                  onClick={() => {
                    setGameEndModal(false);
                  }}
                >
                  Close
                </Button>
              </div>
            </>
          ) : (
            <>
              <Image
                src="/comfort.png"
                width={120}
                height={120}
                alt="Almost there"
              />
              <Typography variant="body1">
                You were close, don&apos;t give up!
              </Typography>
              <DarkButton
                startIcon={<RestartAltIcon />}
                onClick={_restartGame}
                outlined
              >
                Try Again
              </DarkButton>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

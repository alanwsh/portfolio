"use client";
import {
    AppBar,
    Button,
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

export default function Hangman() {

    const [word, setWord] = useState<string>('Alan'.toUpperCase());
    const [guesses, setGuesses] = useState<Array<string>>([]);
    const [chances, setChances] = useState(6);

    const _restartGame = () => {
        setChances(6);
        setGuesses([]);
    };

    const _onKeyPressed = (string: string) => {
        if (!guesses.includes(string)) {
            setGuesses(prev => [...prev, string]);
        }
    }

    const win = [...word].every(char => guesses.includes(char));

    useEffect(() => {
        const incorrectGuesses = guesses.filter(guess => !word.includes(guess));
        setChances(6 - incorrectGuesses.length);
    }, [guesses]);

    return (
        <Grid container justifyContent="center" className="mt-4">
            <div className="flex items-center">
                <Typography variant="h4">Hangman</Typography>
                <Image
                    src="/hangman.png"
                    width={50}
                    height={50}
                    alt="Hangman"
                    className="rounded-full ml-2" />
            </div>
            <Grid container justifyContent="center" className="mt-8">
                <Grid item>
                    <AppBar position="static" className="mb-4 rounded-xl bg-gray-700">
                        <Toolbar>
                            <Button
                                variant="outlined"
                                className="text-white border-white hover:border-white rounded-xl"
                                startIcon={<RestartAltIcon />}
                                onClick={_restartGame}
                            >
                                Restart
                            </Button>
                            <div className="flex-1 text-center">
                                {
                                    [...word].map((char, index) => (
                                        guesses.includes(char) ? (
                                            <span className="border-b border-white mx-1 px-2" key={index}>
                                                {char}
                                            </span>
                                        ) : (
                                            <span className="border-b border-white mx-1 px-2 text-xl font-bold" key={index}>?</span>
                                        )
                                    ))
                                }
                            </div>
                            <div className="flex items-center">
                                <motion.div
                                    key={chances}
                                    initial={{ scale: 2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <Typography variant="h4" className={chances < 2 ? 'text-red': ''}>{chances}</Typography>
                                </motion.div>
                                <Typography variant="caption" className="pl-2">chances left</Typography></div>
                        </Toolbar>
                    </AppBar>
                    <Paper
                        elevation={3}
                        style={{ padding: "16px", textAlign: "center" }}
                        className="bg-gray-700"
                    >
                        <HangmanStepper chances={chances} />
                        <div className="px-4">
                            <VirtualKeyboard onKeyPress={_onKeyPressed} charactersOnly={true} disabledCharacters={guesses} disabledAll={chances < 1 || win} />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

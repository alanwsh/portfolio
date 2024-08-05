import { Figure } from "@/models/hangman";
import React from "react";

export default function HangmanStepper({ chances }: { chances: number }) {
    return (
        <div className="flex justify-center">
            <Figure chances={chances}/>
        </div>
    );
}

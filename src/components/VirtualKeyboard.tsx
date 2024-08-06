import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import "./keyboard.css"; // Import your custom CSS for additional styles
import { BackspaceOutlined } from "@mui/icons-material";

export default function VirtualKeyboard({
  onKeyPress,
  charactersOnly = false,
  disabledCharacters = [],
  disabledAll = false,
  dark = false,
}: {
  charactersOnly?: boolean;
  onKeyPress: (key: string) => void;
  disabledCharacters?: Array<string>;
  disabledAll?: boolean;
  dark?: boolean;
}) {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const keyButtonClass =
    "py-2 px-1 cursor-pointer border-white text-white hover:border-white relative overflow-hidden min-w-[25px] sm:min-w-[47] md:px-4 md:py-3";
  const keyOverlayClass =
    "absolute inset-0 bg-white opacity-0 hover:opacity-50 transition-opacity z-10";

  const _handleClick = (key: string) => {
    onKeyPress(key);
  };

  useEffect(() => {
    const _handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();

      if (keys.flat().includes(key)) {
        onKeyPress(key);
      }
    };

    window.addEventListener("keydown", _handleKeyDown);
    return () => {
      window.removeEventListener("keydown", _handleKeyDown);
    };
  }, [keys]);

  return (
    <div>
      {!charactersOnly && (
        <div className="flex justify-end pr-8">
          <BackspaceOutlined className="cursor-pointer" />
        </div>
      )}

      <div className="flex flex-col items-center mt-4">
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mb-1">
            {row.map((key) => (
              <Box key={key} className="m-1">
                <Button
                  variant="outlined"
                  onClick={() => _handleClick(key)}
                  disabled={disabledCharacters.includes(key) || disabledAll}
                  className={keyButtonClass}
                >
                  <span className={keyOverlayClass}></span>
                  <span className="relative text-white">{key}</span>
                </Button>
              </Box>
            ))}
          </div>
        ))}
        {!charactersOnly && (
          <div className="mt-2">
            <Button
              variant="outlined"
              onClick={() => _handleClick("Space")}
              disabled={disabledAll}
              className={keyButtonClass}
            >
              <span className={keyOverlayClass}></span>
              <span className="relative">Space</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

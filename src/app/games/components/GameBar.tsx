import { AppBar, Toolbar } from "@mui/material";
import React from "react";

export default function GameBar({start, center, end}: { start: React.ReactElement, center?: React.ReactElement, end: React.ReactElement}) {
  return (
    <AppBar position="static" className="mb-4 rounded-xl bg-gray-700">
      <Toolbar className="gap-4 md:gap-0 py-4 md:py-0">
        {
            start
        }

        <div className="flex-1 md:text-center text-start">
          {
            center
          }
        </div>
        <div className={ center ? "flex" : "flex md:ml-auto items-center"}>
          {end}
        </div>
      </Toolbar>
    </AppBar>
  );
}

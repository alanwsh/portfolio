// src/components/LoadingModal.tsx
import React from "react";
import { Dialog, DialogContent, Box, Typography } from "@mui/material";
import { useAppContext } from "@/context/app";
import Image from "next/image";
import ThreeDotsWave from "./animation/ThreeDotsWave";

const LoadingModal = () => {
  const { state } = useAppContext();

  return (
    <Dialog
      open={state.loadingCount > 0}
      aria-labelledby="loading-modal-title"
      aria-describedby="loading-modal-description"
      sx={{
        "& .MuiDialog-paper": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "20vw", // Set Dialog width to 50%
        },
      }}
    >
      <DialogContent
        sx={{
          padding: 0, // Remove default padding
          width: "100%", // Ensure full width of DialogContent
          height: "auto", // Adjust height to content
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%", // Ensure full width of Box
            height: "auto", // Adjust height to content
          }}
        >
          <div className="flex flex-col items-center p-6">
            <Image
              src="https://media.tenor.com/I3RjM4xQO0kAAAAi/monitors-typing.gif"
              alt="Loading..."
              layout="responsive" // Ensure the image adjusts to container size
              width={300} // Provide a width for responsive scaling
              height={300} // Provide a height for responsive scaling
            />
            <div className="flex">
              <Typography className="font-bold mr-2">Loading</Typography>
              <ThreeDotsWave />
            </div>
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;

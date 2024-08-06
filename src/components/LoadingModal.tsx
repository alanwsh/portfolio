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
          minWidth: "20vw",
        },
      }}
    >
      <DialogContent
        sx={{
          padding: 0,
          width: "100%",
          height: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "auto",
          }}
        >
          <div className="flex flex-col items-center p-6">
            <Image
              src="https://media.tenor.com/I3RjM4xQO0kAAAAi/monitors-typing.gif"
              alt="Loading..."
              layout="responsive"
              width={300}
              height={300}
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

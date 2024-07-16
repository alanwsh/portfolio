"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useAppContext } from "@/context/app";
import Image from "next/image";

export default function ImageModal() {
  const { state, setState } = useAppContext();

  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      image: undefined,
    }));
  };

  return (
    <Dialog
      open={!!state.image}
      //   TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{ zIndex: 1400, height: "100%" }}
      maxWidth="xl" // Adjust the maxWidth to fit the image if necessary
      fullWidth
    >
      {!!state.image && (
        <DialogContent
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src={state.image}
          alt={state.image}
          width={500}
          height={500}
          layout="responsive"
          objectFit="contain" // Adjust the image fitting within the container
        />
      </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

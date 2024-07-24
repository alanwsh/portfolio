import { useAppContext } from "@/context/app";
import { Typography, Dialog, DialogContent } from "@mui/material";
import Image from "next/image";

export const ComingSoon = () => (
  <div>
    <Image src="/working_on.png" alt="Coming Soon" width={300} height={300} />
    <Typography className="font-bold text-center">Coming Soon...</Typography>
  </div>
);
export default function ComingSoonModal() {
  const { state, setState } = useAppContext();

  return (
    <Dialog
      open={state.comingSoon}
      keepMounted
      onClose={() => {
        setState((prev) => ({ ...prev, comingSoon: false }));
      }}
      sx={{ zIndex: 999, height: "100%" }}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent className="flex flex-col justify-center items-center">
        <ComingSoon />
      </DialogContent>
    </Dialog>
  );
}

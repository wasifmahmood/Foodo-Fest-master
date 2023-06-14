import React, { useState } from "react";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import { Backdrop, CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
export const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TailSpin color="#fbbe36" height={50} width={50} />
      {/* <ThreeDots color="#fbbe36" height={50} width={50} /> */}
    </div>
  );
};

export const LoaderBackdrop = () => {
  const [open] = useState(true);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fbbe36", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

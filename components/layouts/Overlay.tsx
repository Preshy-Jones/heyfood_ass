import { Box } from "@mui/material";
import React from "react";

const Overlay = ({ showOverlay }: { showOverlay: boolean }) => {
  return (
    <Box>
      {showOverlay && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            background: "black",
            opacity: 0.4,
            zIndex: 50,
          }}
        ></Box>
      )}
    </Box>
  );
};

export default Overlay;

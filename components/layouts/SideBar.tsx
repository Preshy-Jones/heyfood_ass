import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { PadLock } from "../ui/icons";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SideBar = ({
  closeSideBar,
  showSideBar,
}: {
  closeSideBar: () => void;
  showSideBar: boolean;
}) => {
  return (
    <AnimatePresence>
      {showSideBar && (
        <motion.div
          //slide in from the left
          key={"slide-bar-left"}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%", transition: { duration: 0.5 } }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            zIndex: 60,
          }}
        >
          <Box
            sx={{
              height: "100%",
            }}
          >
            <Box
              sx={{
                background: "white",
                width: "20rem",
                height: "100%",
                pt: "2em",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"flex-end"}
                sx={{
                  width: "100%",
                  mb: "3em",
                  px: "1em",
                }}
              >
                <Button
                  onClick={closeSideBar}
                  sx={{
                    color: "black",
                  }}
                >
                  <ClearIcon />
                </Button>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{
                  padding: "8px 0px 8px 24px",
                }}
              >
                <LockOpenIcon
                  sx={{
                    mr: "1em",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1em",
                    lineHeight: 1.5,
                  }}
                  fontFamily={"sans-serif"}
                >
                  Sign in
                </Typography>
              </Stack>
              <Box
                sx={{
                  mt: "4em",
                }}
              >
                <Typography
                  sx={{
                    padding: "0.8em 1.7em",
                  }}
                >
                  Add your restaurant
                </Typography>
                <Typography
                  sx={{
                    padding: "0.8em 1.7em",
                  }}
                >
                  Become a delivery rider
                </Typography>
                <Typography
                  sx={{
                    padding: "0.8em 1.7em",
                  }}
                >
                  Go to Homepage
                </Typography>
              </Box>
              <Stack
                direction={"row"}
                alignItems={"center"}
                mt={"5em"}
                sx={{
                  padding: "8px 0px 8px 24px",
                }}
              >
                <Image
                  src="https://heyfood.africa/icons/new/logo-circle-green.svg"
                  alt="heyfood-logo"
                  width={40}
                  height={40}
                />
                <Box
                  sx={{
                    ml: "0.4em",
                  }}
                >
                  <Typography>Experience the</Typography>
                  <Typography>Heyfood mobile app</Typography>
                </Box>
              </Stack>
              <Stack
                direction={"row"}
                sx={{
                  mt: "2em",
                  padding: "8px 0px 8px 24px",
                }}
              >
                <Stack
                  sx={{
                    background: "black",
                    py: "1em",
                    px: "0.5em",
                    mr: "1em",
                    borderRadius: "2rem",
                  }}
                  direction={"row"}
                  alignItems={"flex-end"}
                >
                  <img src="/apple-logo.svg" alt="apple-logo" />
                  <Typography
                    sx={{
                      color: "white",
                      ml: "0.2em",
                    }}
                  >
                    App store
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    background: "black",
                    py: "1em",
                    px: "0.5em",
                    borderRadius: "2rem",
                  }}
                  direction={"row"}
                  alignItems={"flex-end"}
                >
                  <img src="/google-play-logo.svg" alt="apple-logo" />
                  <Typography
                    sx={{
                      ml: "0.2em",
                      color: "white",
                    }}
                  >
                    Google play
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;

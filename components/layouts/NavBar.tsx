import React, { useContext, useState } from "react";
import { CartIcon, HamburgerIcon, LocationIcon } from "../ui/icons";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SideBar from "./SideBar";
import Overlay from "./Overlay";
import Categories from "../home/hero/Categories";
import ClearIcon from "@mui/icons-material/Clear";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [showOverlay, setOverlay] = useState<boolean>(false);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const openSideBar = () => {
    setShowSideBar(true);
    setOverlay(true);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
    setOverlay(false);
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          py: "1em",
          px: "3em",
          borderBottom: "2px solid rgba(150, 150, 150, 0.1)",
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction="row" alignItems={"center"}>
            <Box
              onClick={openSideBar}
              sx={{
                width: "1.5rem",
                height: "1.5rem",
                mr: "2em",
                cursor: "pointer",
              }}
            >
              <HamburgerIcon />
              <h2>{showOverlay}</h2>
            </Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{
                width: "1.5rem",
                height: "1.5rem",
              }}
            >
              <Image
                src="https://heyfood.africa/icons/new/logo-circle-green.svg"
                alt="heyfood-logo"
                width={40}
                height={40}
              />
            </Stack>
            <AnimatePresence>
              {!showCategories && (
                <motion.div
                  key={"location-indicator"}
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "-100%",
                    opacity: 1,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Stack direction="row" alignItems="center" ml="4rem">
                    <Box
                      sx={{
                        width: "1.5rem",
                        height: "1.5rem",
                      }}
                    >
                      <LocationIcon />
                    </Box>
                    <Typography>Set Location</Typography>
                  </Stack>
                </motion.div>
              )}
            </AnimatePresence>
          </Stack>
          <Box
            onClick={() => setShowCategories(true)}
            component="form"
            style={{
              backgroundColor: "#F0F0F0",
            }}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              borderRadius: "2rem",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search restaurants or food"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>
          <AnimatePresence>
            {showCategories ? (
              <motion.div
                key={"cart-cancel"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween" }}
                exit={{
                  //exit to the right

                  opacity: 1,
                  transition: { type: "tween", duration: 0.5 },
                }}
                onClick={() => setShowCategories(false)}
                //fade in slide in animation
              >
                <ClearIcon
                  style={{ color: "rgba(0, 0, 0, 0.54)", cursor: "pointer" }}
                />
              </motion.div>
            ) : (
              <motion.div
                key={"cart-signin"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween" }}
                exit={{
                  //exit to the right

                  opacity: 1,
                  transition: { type: "tween", duration: 0.5 },
                }}
              >
                <Stack direction="row" alignItems={"center"}>
                  <Typography fontSize={14} fontWeight={500} mr={4}>
                    SIGN IN
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    sx={{
                      backgroundColor: "black",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                      borderRadius: "2rem",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                  >
                    <ShoppingCartIcon
                      sx={{
                        color: "white",
                      }}
                    />
                    <Typography paddingLeft={1} color="white">
                      Cart • 0
                    </Typography>
                  </Stack>
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>
        </Stack>
      </Box>
      <SideBar closeSideBar={closeSideBar} showSideBar={showSideBar} />
      <Overlay showOverlay={showOverlay} />
      {/* <Categories showCategories={showCategories} /> */}
    </Box>
  );
};

export default NavBar;

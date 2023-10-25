import React from "react";
import { CartIcon, HamburgerIcon, LocationIcon } from "../ui/icons";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Stack spacing={2} direction="row" alignItems={"center"}>
        <Box
          sx={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        >
          <HamburgerIcon />
        </Box>
        <Box
          sx={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        >
          <Image
            src="https://heyfood.africa/icons/new/logo-circle-green.svg"
            alt="heyfood-logo"
            width={20}
            height={20}
          />
        </Box>
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          >
            <LocationIcon />
          </Box>
          <h2>Set Location</h2>
        </Stack>
        <Box>
          <Box
            component="form"
            style={{
              backgroundColor: "#fafafa",
            }}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
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
        </Box>
        <h2>SIGN IN</h2>

        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            backgroundColor: "black",
            borderRadius: "50%",
          }}
        >
          <ShoppingCartIcon
            sx={{
              color: "white",
            }}
          />
          <Typography>CART</Typography>
          <Typography>.</Typography>
          <Typography>0</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NavBar;

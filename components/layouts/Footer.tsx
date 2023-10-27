import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} sx={{ width: "100%" }}>
      <Grid
        container
        sx={{
          mt: "9em",
          width: "90%",
        }}
      >
        <Grid item xs={3}>
          <Image
            src="/heyfood-logo.svg"
            width={154}
            height={33}
            alt="hey-food-logo"
          />
          <Typography
            sx={{
              fontSize: "150%",
              letterSpacing: "-1px",
              marginBottom: "0.3em",
            }}
          >
            Your food delivered within minutes.
          </Typography>
          <Stack direction={"row"}>
            <Stack
              sx={{
                background: "black",
                mr: "1em",
                borderRadius: "2rem",
                height:"2.5625rem"
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
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontSize: "150%",
              mb: "0.3em",
              letterSpacing: "-1px",
            }}
          >
            Get To Know Us
          </Typography>
          <FooterLink>About us</FooterLink>
          <FooterLink>LinkedIn</FooterLink>
          <FooterLink>Blog</FooterLink>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontSize: "150%",
              mb: "0.3em",
              letterSpacing: "-1px",
            }}
          >
            Get To Know Us
          </Typography>
          <FooterLink>About us</FooterLink>
          <FooterLink>LinkedIn</FooterLink>
          <FooterLink>Blog</FooterLink>
        </Grid>
        <Grid item xs={2}>
          <Typography
            sx={{
              fontSize: "150%",
              mb: "0.3em",
              letterSpacing: "-1px",
            }}
          >
            Get To Know Us
          </Typography>
          <FooterLink>About us</FooterLink>
          <FooterLink>LinkedIn</FooterLink>
          <FooterLink>Blog</FooterLink>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;

const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      style={{
        color: "#00A205",
        fontSize: "120%",
        letterSpacing: "-0.5px",
        transition: "all 0.5s",
      }}
    >
      {children}
    </Typography>
  );
};

import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} sx={{ width: "100%" }}>
      <Box
        sx={{
          mt: "9em",
          width: "90%",
        }}
      >
        <Grid container>
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
            <Stack direction={"row"} sx={{ mt: "2em" }}>
              <Stack
                sx={{
                  background: "black",
                  mr: "1em",
                  py: "0.5em",
                  px: "0.7em",
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
                  py: "0.5em",
                  px: "0.7em",
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
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <Image
            src="/download-qr.svg"
            width={100}
            height={100}
            alt="qr-code"
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"}>
            <Image
              src="/facebook.svg"
              width={28}
              height={28}
              style={{
                marginRight: "1.2em",
              }}
              alt="facebook-icon"
            />
            <Image
              src="/twitter.svg"
              width={28}
              height={28}
              style={{
                marginRight: "1.2em",
              }}
              alt="twitter-icon"
            />
            <Image
              src="/instagram.svg"
              width={28}
              height={28}
              style={{
                marginRight: "1.2em",
              }}
              alt="instagram-icon"
            />
            <Image
              src="/linkedin.svg"
              width={28}
              height={28}
              alt="linkedin-icon"
            />
          </Stack>

          <Stack direction={"row"} mt={"1em"}>
            <Typography
              style={{
                color: "#00A205",
                lineHeight: 1.43,
                fontSize: "16.52px",
                marginRight: "3em",
              }}
            >
              Terms Of Service
            </Typography>
            <Typography
              style={{
                color: "#00A205",
                lineHeight: 1.43,
                fontSize: "16.52px",
              }}
            >
              Privacy
            </Typography>
          </Stack>
        </Stack>
        <Typography textAlign={"center"} mt={"7em"} mb={"14em"}>
          © 2023 Hey Technologies Limited. All rights reserved
        </Typography>
      </Box>
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
        marginBottom: "0.4em",
      }}
    >
      {children}
    </Typography>
  );
};

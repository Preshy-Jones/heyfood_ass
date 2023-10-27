import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const FoodList = () => {
  return (
    <Stack
      sx={{
        width: "100%",
      }}
      direction={"row"}
      justifyContent={"flex-end"}
    >
      <Stack
        direction={"row"}
        sx={{
          overflowX: "scroll",
          width: "95%",
          mr: "0.9em",
        }}
        className="no-scrollbar"
      >
        {tags.map((tag) => {
          return (
            <Box
              key={tag._id}
              sx={{
                mr: "2em",
                px: "1em",
                py: "0.8em",
                cursor: "pointer",
                //hover background
                "&:hover": {
                  background: "#F5F5F5",
                  borderRadius: "2em",
                  transition: "0.5s",
                  // transform: "scale(1.1)",
                },
                boxShadow: "0px 0px 5px #F5F5F5",
                borderRadius: "2em",

                // background: "red",
              }}
            >
              <img
                src={tag.iconUrl}
                width={43}
                height={42}
                alt={tag.name}
                style={{
                  margin: 0,
                }}
              />
              {/* <Image src={tag.iconUrl} width={50} height={50} alt={tag.name} /> */}
              <Typography
                sx={{
                  margin: 0,
                }}
              >
                {tag.name}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default FoodList;

export const tags = [
  {
    _id: "YtgfLEERc",
    name: "Abacha",
    description: "Abacha",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fpasta-svgrepo-com%201-1.svg_1657125989838?alt=media&token=088d8eb6-9775-4ec4-b49b-ca4652f91931",
    createdDate: "2022-07-06T16:46:31.980Z",
    __v: 0,
  },
  {
    _id: "vee8PYIUh",
    name: "Amala ",
    description: "Amala ",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F192px.svg_1666186478054?alt=media&token=f060fce9-2a2c-4164-873d-a65cf05a6f56",
    createdDate: "2022-10-19T13:34:40.118Z",
    __v: 0,
  },
  {
    _id: "_X0CFm0TU",
    name: "Burger",
    description: "Burger",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fburger-svgrepo-com%202.svg_1657122987363?alt=media&token=ae88b275-a3d9-43b1-8baf-a0e430a57a1d",
    createdDate: "2022-07-06T15:56:30.829Z",
    __v: 0,
  },
  {
    _id: "-dNWtYhhB",
    name: "Chicken",
    description: "chicken",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fchicken-christmas-food-svgrepo-com%201.svg_1657123972810?alt=media&token=6258348f-0c78-4df0-a15b-f1f1813fb042",
    createdDate: "2022-07-06T16:12:55.015Z",
    __v: 0,
  },
  {
    _id: "Jn9rPPJ8f",
    name: "Chinese",
    description: "Chinese",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsushi-svgrepo-com%20(1)%201.svg_1657126182489?alt=media&token=cd9356ae-10bc-4c69-b218-c6361d8efabb",
    createdDate: "2022-07-06T16:49:54.722Z",
    __v: 0,
  },
  {
    _id: "4Pd1Am7Uz",
    name: "Cup Cakes",
    description: "cup cake",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fcupcake-svgrepo-com%201.svg_1657124672533?alt=media&token=553659a1-11a9-4378-8adc-1b8abdd710a9",
    createdDate: "2022-07-06T16:24:34.798Z",
    __v: 0,
  },
  {
    _id: "ssvOP5Ypr",
    name: "Doughnuts",
    description: "doughnut",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fdoughnut-svgrepo-com%201.svg_1657124741318?alt=media&token=b023bd80-983b-4bf1-8d95-3ba8a01b6e52",
    createdDate: "2022-07-06T16:25:43.905Z",
    __v: 0,
  },
  {
    _id: "SH1VhJOhRU",
    name: "Ewa Agoyin",
    description: "Ewa agoyin",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201482.svg_1657125007546?alt=media&token=f7131558-2d48-4ba1-8981-9f98103aae34",
    createdDate: "2022-07-06T16:30:09.938Z",
    __v: 0,
  },
  {
    _id: "EVxs4taEB",
    name: "Fastfood",
    description: "fastfood",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Ffast-food-burger-svgrepo-com%202.svg_1657124812917?alt=media&token=d5f00823-8f3a-4085-8edd-76c161fb9618",
    createdDate: "2022-07-06T16:26:54.861Z",
    __v: 0,
  },
  {
    _id: "duvHhlh-R",
    name: "Fries",
    description: "fries",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Ffrench-fries-svgrepo-com%202.svg_1657123642089?alt=media&token=1e069634-295b-4bdb-b0ca-ca980127363d",
    createdDate: "2022-07-06T16:07:24.178Z",
    __v: 0,
  },
  {
    _id: "tdHUa7GJs",
    name: "Goat meat",
    description: "Goat meat",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fmeat-on-bone-svgrepo-com%201.svg_1657125800626?alt=media&token=ec420ff7-afe9-4a04-8dc4-d82d8e2b39fc",
    createdDate: "2022-07-06T16:43:22.335Z",
    __v: 0,
  },
  {
    _id: "rRZfheO6-",
    name: "Grills",
    description: "Grills",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsausage-meat-svgrepo-com%201.svg_1657126581944?alt=media&token=1450cb6c-4ee8-4110-a9a9-396306bf87d1",
    createdDate: "2022-07-06T16:56:24.251Z",
    __v: 0,
  },
  {
    _id: "L0lPR2hKZ",
    name: "Grocery",
    description: "Grocery items",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fgroceries-svgrepo-com.svg_1660776803873?alt=media&token=e0e8a06b-b840-4a85-803a-1b882503f4b3",
    createdDate: "2022-08-17T22:53:27.374Z",
    __v: 0,
  },
  {
    _id: "hD5nwR8vP",
    name: "Ice Cream",
    description: "Ice cream",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fice-cream-svgrepo-com%20(1)%201.svg_1657125237440?alt=media&token=2702f233-e7e5-43e1-9324-84f6d11901a7",
    createdDate: "2022-07-06T16:33:59.628Z",
    __v: 0,
  },
  {
    _id: "1yesBgADE",
    name: "Juice",
    description: "juice",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fjuice-svgrepo-com%202.svg_1657125631077?alt=media&token=7c8056d4-400a-4ed2-b88e-e456458769cb",
    createdDate: "2022-07-06T16:40:33.151Z",
    __v: 0,
  },
  {
    _id: "nuOi8SCJw",
    name: "Native corner",
    description: "Native corner ",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F192px.svg_1666105615696?alt=media&token=c40cf1dc-b764-4f17-b8d7-7c2629b31e6b",
    createdDate: "2022-10-18T15:06:57.940Z",
    __v: 0,
  },
  {
    _id: "c1P3MGWku",
    name: "Parfait",
    description: "Parfait",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fbakery%2Bsvg%2Bflat%2Bparfait-1319964833384041423.svg_1686046599322?alt=media&token=63ed1035-de63-4ec0-ae2c-d56e995812ce",
    createdDate: "2023-06-06T10:16:42.757Z",
    __v: 0,
  },
  {
    _id: "xBCKCt-Ps",
    name: "Pastries",
    description: "Pastries",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fmuffin-131979035407500020.svg_1686046699134?alt=media&token=44b80646-1d78-4dc7-930b-315aed9bd73d",
    createdDate: "2023-06-06T10:18:21.556Z",
    __v: 0,
  },
  {
    _id: "Le-ijrj1L",
    name: "Peppersoup",
    description: "Delicious peppersoup",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsoup-svgrepo-com.svg_1665669169022?alt=media&token=d8834274-1062-40d7-a95d-9c36decdfa8d",
    createdDate: "2022-10-13T13:52:55.331Z",
    __v: 0,
  },
  {
    _id: "Dfd2_rFMw",
    name: "Pizza",
    description: "pizza",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fpizza-svgrepo-com%201.svg_1657126266919?alt=media&token=b0659e3e-1aa8-42ed-8849-93cf927180bc",
    createdDate: "2022-07-06T16:51:09.526Z",
    __v: 0,
  },
  {
    _id: "JDjt4HI9-",
    name: "Pounded Yam",
    description: "pounded yam",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fnoodles-svgrepo-com%202.svg_1657125918230?alt=media&token=06ae207d-6f03-4e55-a1ac-e4e725b34acf",
    createdDate: "2022-07-06T16:45:20.481Z",
    __v: 0,
  },
  {
    _id: "P0GjVawaB",
    name: "Rice",
    description: "rice",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fjapanese-food-rice-svgrepo-com%201.svg_1657125340797?alt=media&token=5e4c0b0b-4a87-45c5-b053-85dfd13f624e",
    createdDate: "2022-07-06T16:35:43.065Z",
    __v: 0,
  },
  {
    _id: "UOp3LfSJQ",
    name: "Salad",
    description: "Healthy food",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F192px.svg_1666285421145?alt=media&token=d07127e6-e672-4fd5-b80c-93bf4bc373df",
    createdDate: "2022-10-20T17:03:44.721Z",
    __v: 0,
  },
  {
    _id: "3W9FYjZ4y",
    name: "Sandwich",
    description: "sandwich",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsandwich-svgrepo-com%201.svg_1657126527119?alt=media&token=05b985e0-9228-436a-971c-9f168289005f",
    createdDate: "2022-07-06T16:55:29.325Z",
    __v: 0,
  },
  {
    _id: "OHsqMOP3k",
    name: "Seafood",
    description: "seafood",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fprawn-shrimp-svgrepo-com%201.svg_1657126363721?alt=media&token=c69d30de-e00b-461d-8ef4-4c157a805181",
    createdDate: "2022-07-06T16:52:45.892Z",
    __v: 0,
  },
  {
    _id: "9m__ia6qj2",
    name: "Shawarma",
    description: "shawarma",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fburrito-svgrepo-com%201.svg_1657123337321?alt=media&token=b0db6e73-057f-4040-b106-347f8f32a49d",
    createdDate: "2022-07-06T16:02:19.859Z",
    __v: 0,
  },
  {
    _id: "ECTHgEJwu",
    name: "Small Chops",
    description: "Small Chops",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FSamosa.svg_1657289906949?alt=media&token=a56178ee-13ab-4808-961d-c29e5ed55485",
    createdDate: "2022-07-08T14:18:29.027Z",
    __v: 0,
  },
  {
    _id: "WFi_hju5l",
    name: "Smoothie",
    description: "Smoothie",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsmoothie-svgrepo-com.svg_1683901486791?alt=media&token=24ec39f1-2524-4130-8afd-ecc820b0349e",
    createdDate: "2023-05-12T14:24:48.978Z",
    __v: 0,
  },
  {
    _id: "qU-chaLdZ",
    name: "Smothies",
    description: "Smothies",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fmelon-juice-svgrepo-com%201.svg_1657125840561?alt=media&token=405def54-fe46-4bfd-b599-d60017641fe5",
    createdDate: "2022-07-06T16:44:02.777Z",
    __v: 0,
  },
  {
    _id: "fU0dPHO--",
    name: "Snacks ",
    description: "Snack bar",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F192px.svg_1666286493527?alt=media&token=11e3897b-f3bb-43f7-b715-bbc9f5b0c751",
    createdDate: "2022-10-20T17:21:36.993Z",
    __v: 0,
  },
  {
    _id: "qLXBZjcbQ",
    name: "Soup bowl",
    description: "Soup bowl",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsoup-svgrepo-com%201.svg_1657126696679?alt=media&token=1a7a0734-e08a-4eef-8554-03f014210b7a",
    createdDate: "2022-07-06T16:58:18.792Z",
    __v: 0,
  },
  {
    _id: "Qbp9SI1SL",
    name: "Spaghetti",
    description: "Spaghetti",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fpasta-svgrepo-com%201.svg_1657126023636?alt=media&token=7d56c084-109c-4976-8716-8e1e455b73e6",
    createdDate: "2022-07-06T16:47:05.833Z",
    __v: 0,
  },
  {
    _id: "lK_0EIgct",
    name: "Turkey",
    description: "Turkey",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FGroup.svg_1657125210117?alt=media&token=55cbf5ac-a157-42b8-9cb3-b5c782d734a0",
    createdDate: "2022-07-06T16:33:32.054Z",
    __v: 0,
  },
  {
    _id: "BuJdnWGn3",
    name: "Vegetable",
    description: "vegetable",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FCollard%20Greens.svg_1657124429917?alt=media&token=9ba46a8c-a838-44a3-ade4-3d6dfab3c7f9",
    createdDate: "2022-07-06T16:20:32.201Z",
    __v: 0,
  },
  {
    _id: "pp4oI6hNZ",
    name: "Yoghurt",
    description: "Yoghurt",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fyogurt-svgrepo-com%201.svg_1657126758954?alt=media&token=f376bbbe-5afd-48d5-8d47-331baca9340b",
    createdDate: "2022-07-06T16:59:20.953Z",
    __v: 0,
  },
];

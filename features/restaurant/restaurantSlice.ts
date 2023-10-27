import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MathOperations } from "../../types/methods";
import { Tag } from "@/types/global";
import restaurantService from "./restaurantService";

export interface RestaurantState {
  tags: Tag[];
  restaurants: any;
  showOverlay: boolean;
  showSideBar: boolean;
  isLoading: boolean;
}

const initialState: RestaurantState = {
  tags: [],
  restaurants: [],
  showOverlay: false,
  showSideBar: false,
  isLoading: false,
};

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async (payload, thunkAPI) => {
    try {
      return await restaurantService.fetchRestaurants(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const restaurantsSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setOverLay: (state, action: PayloadAction<boolean>) => {
      state.showOverlay = action.payload;
    },
    setSideBar: (state, action: PayloadAction<boolean>) => {
      state.showSideBar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRestaurants.fulfilled, (state: RestaurantState, action) => {
        console.log(action.payload.data);
        state.isLoading = false;
        state.tags = action.payload.data.cars[0].results;
      })
      .addCase(getRestaurants.rejected, (state: RestaurantState, action) => {
        // console.log(action);
        state.isLoading = false;
      });
  },
});

export const { setOverLay, setSideBar } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;

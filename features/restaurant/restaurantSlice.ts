import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MathOperations } from "../../types/methods";
import { Tag } from "@/types/global";
import restaurantService from "./restaurantService";

enum SORTOPTIONS {
  POPULAR = "popular",
  NEWEST = "newest",
  MOST_RATED = "most_rated",
  HIGHEST_RATED = "highest_rated",
}

export type SortOptions = SORTOPTIONS;

interface FilterOptions {
  sort: SortOptions | "";
  search: string;
  tag: string;
}
export interface RestaurantState {
  tags: Tag[];
  restaurants: any;
  showOverlay: boolean;
  showSideBar: boolean;
  restaurantIsLoading: boolean;
  tagsLoading: boolean;
  search: string;
  filterOptions: FilterOptions;
}

const initialState: RestaurantState = {
  tags: [],
  restaurants: [],
  showOverlay: false,
  showSideBar: false,
  restaurantIsLoading: false,
  tagsLoading: false,
  search: "",
  filterOptions: { sort: "", search: "", tag: "" },
};
export const getRestaurants = createAsyncThunk(
  "tags/getRestaurants",
  async (payload, thunkAPI) => {
    try {
      return await restaurantService.fetchRestaurants(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getTags = createAsyncThunk(
  "tag/getTags",
  async (payload, thunkAPI) => {
    try {
      return await restaurantService.fetchTags(payload);
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
        state.restaurantIsLoading = true;
      })
      .addCase(getRestaurants.fulfilled, (state: RestaurantState, action) => {
        console.log(action.payload.data);
        state.restaurantIsLoading = false;
        state.restaurants = action.payload.data;
      })
      .addCase(getRestaurants.rejected, (state: RestaurantState, action) => {
        // console.log(action);
        state.restaurantIsLoading = false;
      })
      .addCase(getTags.pending, (state) => {
        state.tagsLoading = true;
      })
      .addCase(getTags.fulfilled, (state: RestaurantState, action) => {
        console.log(action.payload.data);
        state.tagsLoading = false;
        state.tags = action.payload.data;
      })
      .addCase(getTags.rejected, (state: RestaurantState, action) => {
        // console.log(action);
        state.tagsLoading = false;
      });
  },
});

export const { setOverLay, setSideBar } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;

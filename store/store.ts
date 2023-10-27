import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import restaurantReducer from "../features/restaurant/restaurantSlice";
export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
  },

  //  middleware;getDefaultMiddleware => getDefaultMiddleware().concat(),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

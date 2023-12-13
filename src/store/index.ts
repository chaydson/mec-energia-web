import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { mecEnergiaApi } from "@/api";
import app from "./appSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      app,
      [mecEnergiaApi.reducerPath]: mecEnergiaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(mecEnergiaApi.middleware),
  });

export const wrapper = createWrapper(makeStore);

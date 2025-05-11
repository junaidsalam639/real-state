import { configureStore } from "@reduxjs/toolkit";
import { realStateAPI } from "./createApi";

export const store = configureStore({
    reducer: {
        [realStateAPI.reducerPath]: realStateAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(realStateAPI.middleware),
});


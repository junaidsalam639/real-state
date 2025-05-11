import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const realStateAPI = createApi({
    reducerPath: "realStateAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com/",
    }),
    endpoints: () => ({}),
});



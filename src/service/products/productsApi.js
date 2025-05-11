import { realStateAPI } from "@/redux/createApi";

const productsApi = realStateAPI.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products",
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;


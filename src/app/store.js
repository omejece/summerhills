import {configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import landingPageSlice from "../features/landingPage/landingPageSlice";


const Store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        landingPage: landingPageSlice
    },
    middleware: (getDefaulMiddleware)=> getDefaulMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default Store;

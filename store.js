
import { configureStore } from "@reduxjs/toolkit";
import itemsliceReducer from "./itemslice";

export const store = configureStore({
    reducer: {
        item: itemsliceReducer
    }
})

export default store;
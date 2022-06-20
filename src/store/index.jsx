import trelloSlice from "./Slices/trellaSlice";
import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./Slices/uiSlice";

const store = configureStore({
    reducer: {
        trello: trelloSlice.reducer,
        todo: uiSlice.reducer
    }
})
export default store
import { configureStore } from "@reduxjs/toolkit";
import jokeSlice from "./jokeslice";

const store = configureStore({
    reducer:{
        joke:jokeSlice.reducer
    }
})

export default store
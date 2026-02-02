import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/services/slice/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export default store;
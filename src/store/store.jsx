import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/services/slice/counterSlice";
import PostReducer from "../components/posts/postSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts:PostReducer,
    },
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import jobReducer from './jobSlice';
export default configureStore({
    reducer :{
        user:userSlice,
        job: jobReducer,
    }
})
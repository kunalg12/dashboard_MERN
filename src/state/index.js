 import { createSlice } from "@reduxjs/toolkit";

 const initalState = {
    mode: "dark"
 };

 export const globalSlice = createSlice ({
    name: "global",
    initalState,
    reducer: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        }
    }
 });

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
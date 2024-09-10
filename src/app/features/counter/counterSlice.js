import { createSlice } from "@reduxjs/toolkit";

// we are accessing the state directlu in this case or mutating the original state directly which is not allowed in react
export const counterslice = createSlice({
    name: "counter",
    initialState: {value: 0},
    reducers:{
        increment: (state)=>{
            state.value +=1;
        },
        decrement: (state)=>{
            state.value -= 1;
        }
    }
})

export const {increment, decrement} = counterslice.actions;
export default counterslice.reducer;

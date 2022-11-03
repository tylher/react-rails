import { createSlice } from "@reduxjs/toolkit";

const greetingSlice = createSlice({
    name: 'greeting',
    initialState: 'Hello',
    reducers: {
        randomGreeting: (state,action)=>{
            state = action.payload;
        }
    }
})

export default greetingSlice.reducer
export const {randomGreeting} = greetingSlice.actions


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputs:{}
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // setInput: (state, action) => {
        //     state.currentStep = action.payload
        // },
        // setStepsData: (state, action) => {
        //     console.log('pyaloadddddd',action.payload)
        //     state.stepsData = action.payload
        // },

    }
});

export const {

} = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const getLogin = (param) => async (dispatch) => {
    // return authService.getLogin(param)
    // .then(async (res) => {
    //     console.log('resp at slice',res)
    //     dispatch(setInputs(res?.data.response));
    //     localStorage.setItem("token", res?.data?.response?.token)
    //     return res;
    // })
    //     .catch((error) => {

    //         dispatch(authSuccess(null));
    //         localStorage.removeItem("token")
    //         return error
    //     });
};

const studentList=[
    {id:1, name:'Rahul'},
    {id:2, name:'Guri'},
    {id:3, name:'Payal'},
    {id:4, name:'Mohit'},
]

const initialState = {
    inputs:{},
    studentList,
};

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        setInputs: (state, action) => {
            state.inputs = action.payload
        },
    }
});

export const {
    setInputs
} = studentSlice.actions;

export default studentSlice.reducer;

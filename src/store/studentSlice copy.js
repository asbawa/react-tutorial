import { createSlice } from "@reduxjs/toolkit";
// import authService from '../../services/auth/authService'

// export const getLogin = (param, navigate) => async (dispatch) => {
//     // dispatch(loadingStatus(true));

//     return authService.getLogin(param).then(async (res) => {
//         console.log('resp at slice',res)
//         dispatch(authSuccess(res?.data.response));
//         localStorage.setItem("token", res?.data?.response?.token)
//         return res;
//     })
//         .catch((error) => {

//             dispatch(authSuccess(null));
//             localStorage.removeItem("token")
//             return error
//         });
// };

// export const getLogout = (navigate) => async (dispatch) => {
//     // dispatch(loadingStatus(true));

//     return authService.getLogout().then(async (res) => {
//         console.log('resp at slice',res)
//         dispatch(authSuccess(null));
//         localStorage.removeItem("token")
//         navigate("/")
//         return res;
//     })
//         .catch((error) => {

//             dispatch(authSuccess(null));
//             localStorage.removeItem("token")
//             return error
//         });
// };


const initialState = {
    
};

const studentSlice = createSlice({
    name: "student",
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

} = studentSlice.actions;

export default studentSlice.reducer;

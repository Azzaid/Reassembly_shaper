import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {isLoggedIN: false},
    reducers: {
        logInUser(state, action) {
            state.isLoggedIn = true;
        }
    }
}
)

export const logInUser = userSlice.actions.logInUser;

export default userSlice.reducer
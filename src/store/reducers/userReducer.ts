import {UserLogInAction, UserLogOffAction} from "../actions/userActionCreators";
import {UserActions} from "../actions/actionTypes"
import {StoreType} from "../initStore";

type UserData = {
    isLoggedIN: boolean
}

const initialState:UserData = {isLoggedIN: false}

const userReducer = (state = initialState, action: UserLogInAction | UserLogOffAction) => {
    switch (action.type) {
        case UserActions.userLogIN:
            return {...state, isLoggedIN: action.payload}
        case UserActions.userLogOff:
            return {...state, isLoggedIN: false}
        default:
            return {...state}
    }
};

export default userReducer
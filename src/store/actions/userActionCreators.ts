import {UserActions} from "./actionTypes";

export type UserLogInAction = {
    type: UserActions.userLogIN,
    payload: string
}

export type UserLogOffAction = {
    type: UserActions.userLogOff
}


export const createUserLogInAction = (userToken:string):UserLogInAction => ({type:UserActions.userLogIN, payload:userToken});

export const createUserLogOffAction = ():UserLogOffAction => ({type:UserActions.userLogOff});
const userReducer = (state={isLoggedIN: false}, action) => {
    switch (action.type) {
        case "userLogIN":
            return {...state, isLoggedIN: true}
        case "userLogOut":
            return {...state, isLoggedIN: false}
        default:
            return {...state}
    }
};

export default userReducer
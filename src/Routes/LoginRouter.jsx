import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "../Scenes/LoginPage";

class LoginRoute extends React.Component {
    constructor(props) {
        super(props);
    }



    renderForLoggedUser = (Scene) => {
        if (userLoggedIn) return <Scene/>
        return <Navigate to={"/login"}/>
    }

    render () {
        return (
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/"} element={this.renderForLoggedUser(<RootRoute/>)}/>
            </Routes>
        )
    }
}

export default LoginRoute
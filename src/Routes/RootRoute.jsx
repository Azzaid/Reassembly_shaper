import React from "react";
import {Routes, Route} from "react-router-dom";
import LessonsList from "Scenes/LessonsList/LessonsList";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import GlobalModalProvider from "../HOC/GlobalModalProvider";

class RootRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Routes>
                <Route path={"/main"} element={<GlobalModalProvider><MainLayout/></GlobalModalProvider>}>
                    <Route index element={<LessonsList/>}/>
                    <Route path={"someLessons/:lessonID"} element={<LessonsList/>}/>
                </Route>
            </Routes>
        )
    }
}

export default RootRoute
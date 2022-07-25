import React from "react";
import {Routes, Route} from "react-router-dom";
import LessonsList from "Scenes/LessonsList/LessonsList";
import MainLayout from "Layouts/MainLayout/MainLayout";
import ExtraWideLayout from "Layouts/ExtraWideLayout/ExtraWideLayout"
import GlobalModalProvider from "../HOC/GlobalModalProvider";
import {LESSONS_ROUTES} from "../constants/routes";
import Shaper from "Scenes/Shaper/Shaper";

class RootRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Routes>
                <Route index element={<ExtraWideLayout/>}/>
                <Route path={"nonTMS"} element={<ExtraWideLayout/>}>
                    <Route path={"shaper"} element={<Shaper/>}/>
                </Route>
                <Route path={"/main"} element={<GlobalModalProvider><MainLayout/></GlobalModalProvider>}>
                    <Route index element={<LessonsList/>}/>
                    <Route path={LESSONS_ROUTES.lessonPage} element={<LessonsList/>}/>
                </Route>
            </Routes>
        )
    }
}

export default RootRoute
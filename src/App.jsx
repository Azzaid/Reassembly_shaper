//node modules
import React from "react";
import LessonsList from "Scenes/LessonsList/LessonsList";
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import GlobalModalProvider from "./HOC/GlobalModalProvider";
import {BrowserRouter, HashRouter, MemoryRouter} from "react-router-dom";
import RootRoute from "./Routes/RootRoute";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <GlobalThemeProvider>
                    <RootRoute/>
                </GlobalThemeProvider>
            </BrowserRouter>
        </div>
    )
}

export default App
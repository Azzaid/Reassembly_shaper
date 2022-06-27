//node modules
import React from "react";
import LessonsList from "Scenes/LessonsList/LessonsList";
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";

const App = () => {
    return (
        <div className="app">
            <GlobalThemeProvider>
                <LessonsList/>
            </GlobalThemeProvider>
        </div>
    )
}

export default App
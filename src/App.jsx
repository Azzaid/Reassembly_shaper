//node modules
import React from "react";
import LessonsList from "Scenes/LessonsList/LessonsList";
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import MainLayout from "./Layouts/MainLayout";
import GlobalModalProvider from "./HOC/GlobalModalProvider";

const App = () => {
    return (
        <div className="app">
            <GlobalThemeProvider>
                <GlobalModalProvider>
                    <MainLayout>
                        <LessonsList/>
                    </MainLayout>
                </GlobalModalProvider>
            </GlobalThemeProvider>
        </div>
    )
}

export default App
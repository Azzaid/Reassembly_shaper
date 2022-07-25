//node modules
import React from "react";
import {BrowserRouter, HashRouter, MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";

import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import GlobalErrorBoundary from "./HOC/GlobalErrorBoundary";

import LoginRoute from "./Routes/LoginRouter";

import {persistor, store} from "store/initStore"
import {PersistGate} from "redux-persist/integration/react";

const App = () => {
    return (
        <div className="app">
            <Provider store={store}>
                <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                    <BrowserRouter>
                        <GlobalThemeProvider>
                            <GlobalErrorBoundary>
                                <LoginRoute/>
                            </GlobalErrorBoundary>
                        </GlobalThemeProvider>
                    </BrowserRouter>
                </PersistGate>
            </Provider>

        </div>
    )
}

export default App
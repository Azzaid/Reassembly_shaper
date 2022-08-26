import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers/rootReducer";
import {persistReducer, createMigrate, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import thunk from "redux-thunk";

const middlewareList = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewareList);

const enhancersList = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__) enhancersList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
const composedEnhancers = compose(middlewareEnhancer, ...enhancersList);

const persistConfig = {
    key: "root",
    storage,
    version: 12,
    migrate: createMigrate({
        0:(state) => {
            return {...state, user:{...state.userData}};
        },
    }),
    blacklist: ["globalApiErrorState"],
    stateReconciler: hardSet,
};
const persistedRootReducer = persistReducer(persistConfig, rootReducer);





export const store = createStore(rootReducer, composedEnhancers);

export const persistor = persistStore(store);

export type StoreType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
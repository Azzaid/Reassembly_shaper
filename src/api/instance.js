import axios from "axios";

const fakeServerInstance = axios.create({
    baseURL:"http://localhost:3004/",
});

import {store} from "store/initStore"

/*let refreshed = false;

fakeServerInstance.interceptors.response.use((responce) => {
    if (refreshed === true) {
        setIsUserLoggedIn(responce.headers.acess, responce.headers.refresh);
    }

}, () => {
    if (error.code === 403) logOutUser(); isUserLoggedIN = false, wipeUserData , reload page
})

fakeServerInstance.interceptors.request.use((request) => {
    request.headers.token = data.acess;
}, (request) => {
    if (error.code === 403) store.dispatch({type:"userLogOut"});
    if (error.code === 403) {
        request.headers.token = data.refresh;
        refreshed = true;
        return axios(request);
    }
})*/

export default fakeServerInstance


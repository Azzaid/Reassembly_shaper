import {useCallback} from "react";

const useThrottle = (callBack, timeout) => {
    let timeoutID = null;

    return useCallback((...args) => {
        console.log("throttler fired");

        if (timeoutID) {
            console.log("throttler found previous timeout and killed it");
            clearTimeout(timeoutID);
        }

        console.log("throttler created timeout");
        timeoutID = setTimeout(() => {
            console.log("timeout not killed in time and now executed");
            callBack(...args);
            timeoutID = null;
        }, timeout);
    }, [])
}

export default useThrottle
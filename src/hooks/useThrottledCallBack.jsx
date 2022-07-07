const throttleFunction = (callBack, timeout) => {
    let timeoutID = null;

    return useCallback((...args) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(() => {
            callBack(...args);
            timeoutID = null;
        }, timeout);
    }, [])
}

export default throttleFunction
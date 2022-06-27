import React from "react";

const concatenate = (a, b) => {
    return a + b;
}

const toggleInArray = (array, item) => {
    const newArray = [...array];
    const itemIndex = newArray.indexOf(item);

    if (itemIndex === -1) {
        newArray.push(item);
    } else {
        newArray.splice(itemIndex, 1);
    }
    return newArray
}

export default concatenate
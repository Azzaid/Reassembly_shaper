import fakeServerInstance from "./instance";

export const fetchLessonsList = () => fakeServerInstance.get("/lessons");

export const loginUser = ({login, password}) => fakeServerInstance.post("/login", {login, password});






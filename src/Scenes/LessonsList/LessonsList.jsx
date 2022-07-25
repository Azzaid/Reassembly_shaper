//node modules
import React, {useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState} from "react";
import styled from 'styled-components';

//components
import LessonCard from "components/lessonCard";

//assets / helpers props drilling
import { MyContext } from "HOC/GlobalModalProvider";
import AddLessonModalContent from "./Components/AddLessonModalConten";
import LessonsTable from "../LessonsTable/LessonsTable";

import {fetchLessonsList} from "api/lessonsApi";

const StyledLessonsList = styled.div`
  width: 80vw;
  max-width: 900px;
  
    .lessonsHolder {
      display: flex;
      border: 2px solid black;
    }
`

const nonReactFunction = () => {
    const someOtherFunction = () => {}

    someOtherFunction()
}

nonReactFunction()

const LessonList  = (props) => {
    const [lessonsList, setLessonsList] = useState(undefined);
    const openModal = useContext(MyContext);

    const getLessonsList = async () => {
        fetchLessonsList().then(({data}) => {
            setLessonsList(data);
        }).catch(() => {});
    }

    useEffect(() => {
        getLessonsList();
    }, []);

    const addLesson = (lessonData) => {
        setLessonsList([...lessonsList, lessonData]);
        openModal(false);
    }

    const removeLesson = (index) => () => {
        const newLessonList = [...lessonsList];
        newLessonList.splice(index, 1);
        setLessonsList(newLessonList);
    }

    const updateLessonName = (index, newName) => {

    }

    const columns = [{
        name:"Lesson name", dataKey:"lessonName"
    },
        {
            name:"Lesson status", dataKey:"lessonStatus"
        },
        {
            name:"Theme", dataKey:"theme"
        }]

    const getLessonsTable = () => {
        if (lessonsList === undefined) return <div>list loading</div>
        if (!lessonsList.length) return <div>No lessons created yet</div>
        return <LessonsTable columnsFromProps={columns} tableDataFromProps={lessonsList} isPaginable pageSize={4}/>
    }

    return (
        <StyledLessonsList>
            <div className="lessonsHolder">
                {(lessonsList && lessonsList.length) &&
                    lessonsList.map((lesson, index) => (
                        <LessonCard {...lesson}/>
                    ))
                }
            </div>
            <button onClick={() => {
                openModal(<AddLessonModalContent addLesson={addLesson} updateModalContext={openModal}/>)
            }}>
                add lesson
            </button>
            <br/>
            {getLessonsTable()}
        </StyledLessonsList>
    )
}

export default LessonList
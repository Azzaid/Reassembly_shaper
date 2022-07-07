//node modules
import React, {useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState} from "react";
import styled from 'styled-components';

//components
import LessonCard from "components/lessonCard";

//assets / helpers props drilling
import {LESSON_STATUS} from "constants/lessons/lessonStatus";
import withModalContext from "HOC/withModalContext";
import { MyContext } from "HOC/GlobalModalProvider";
import AddLessonModalContent from "./Components/AddLessonModalConten";
import {Route} from "react-router-dom";
import LessonsTable from "../LessonsTable/LessonsTable";

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
    const [lessonsList, setLessonsList] = useState([]);
    const openModal = useContext(MyContext);

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

    const data = [
        {lessonName:"1", lessonStatus:"done", theme:"aaaasss"},
        {lessonName:"2", lessonStatus:"not", theme:"sdfsdssss"},
        {lessonName:"3", lessonStatus:"done", theme:"dfdfdfdf"},
        {lessonName:"4", lessonStatus:"done", theme:"fghfghfghfghgfh"},
        {lessonName:"5", lessonStatus:"done", theme:"fghfgh"},
        {lessonName:"6", lessonStatus:"done", theme:"5fgbfg54g"},
        {lessonName:"7", lessonStatus:"done", theme:"vcbt544gf5"},
    ]

    return (
        <StyledLessonsList>
            <div className="lessonsHolder">
                {!!lessonsList.length &&
                    lessonsList.map((lesson, index) => (
                        <LessonCard {...lesson} removeLesson={propperCallBack(index)}/>
                    ))
                }
            </div>
            <button onClick={() => {
                openModal(<AddLessonModalContent addLesson={addLesson} updateModalContext={openModal}/>)
            }}>
                add lesson
            </button>
            <LessonsTable columnsFromProps={columns} tableDataFromProps={data} isPaginable/>
        </StyledLessonsList>
    )
}

export default LessonList
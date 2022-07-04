//node modules
import React, {useCallback, useEffect, useState} from "react";
import styled from 'styled-components';

//components
import LessonCard from "components/lessonCard";

//assets / helpers props drilling
import {LESSON_STATUS} from "constants/lessons/lessonStatus";
import withModalContext from "HOC/withModalContext";
import AddLessonModalContent from "./Components/AddLessonModalConten";
import {Route} from "react-router-dom";

const StyledLessonsList = styled.div`
    .lessonsHolder {
      display: flex;
      border: 2px solid black;
    }
`

const LessonListFunctional  = (props) => {
    const [stateVariable, setterForStateVariable] = useState("");

    const addLesson = (lessonData) => {
        setterForStateVariable([...stateVariable, lessonData]);
    }

    return (
        <h1>{props.header}</h1>
    )
}

class LessonList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header 1",
            footerDivs: [],
            someCondition: false,
            lessonsList: [],
        }

        this.someData = 1;
    }

    setAnotherHeader(string) {
        this.setState({header:state.header + string}, () => {
            console.log("new state is", this.state);
        });
    }

    /*static getDerivedStateFromProps (props, state) {
        return {}
    }*/

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false
    }*/

    /*componentDidMount() {
        document.addEventListener("click", this.setAnotherHeader.bind(this));
    }*/

    /*componentDidUpdate(prevProps, prevState, snapshot) {

    }*/

    /*componentWillUnmount() {
        document.removeEventListener("click");
    }*/

    addLesson(lessonData) {
        this.someData = 2;
        this.setState(oldState => {
            return(
                {
                    lessonsList: [...oldState.lessonsList, lessonData]
                }
            )},
            () => {
            this.props.updateModalContext(false);
        });
    }

    render() {
        const {header, lessonsList, footerDivs, displayedPage} = this.state;
        const {updateModalContext} = this.props;

        return (
            <StyledLessonsList>
                <div className="header">
                    {header}
                </div>
                <div className="lessonsHolder">
                    {!!lessonsList.length &&
                        lessonsList.map(lesson => (
                            <LessonCard {...lesson}/>
                        ))
                    }
                </div>
                <button onClick={() => {
                    updateModalContext(<AddLessonModalContent addLesson={this.addLesson.bind(this)} updateModalContext={updateModalContext}/>)
                }}>
                    add lesson
                </button>
                <div className="footer">
                    {
                        footerDivs.map((divText, index) => {
                            return (
                                <div key={index}>
                                    {divText}
                                </div>
                            )
                        })
                    }
                </div>
            </StyledLessonsList>
        )
    }
}

export default withModalContext(LessonList)
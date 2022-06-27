//node modules
import React from "react";
import styled from 'styled-components'

//components
import LessonCard from "components/lessonCard";
import {LESSON_STATUS} from "../../constants/lessons/lessonStatus";

//assets / helpers props drilling

export const MyContext = React.createContext("Oops error default value");

class LessonList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header 1",
            footerDivs: [],
        }
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

    render() {
        console.log("render me!");

        return (
            <div className="app">
                <div className="header">
                    {this.state.header}
                </div>
                <div className="body">
                    <MyContext.Provider value={"lesson 1"}>
                        <LessonCard width={123} status={LESSON_STATUS.pending}/>
                    </MyContext.Provider>

                    <MyContext.Provider value={"lesson 2"}>
                        <LessonCard status={LESSON_STATUS.missed}/>
                    </MyContext.Provider>
                    <MyContext.Provider value={"lesson 3"}>
                        <LessonCard status={LESSON_STATUS.completed}/>
                    </MyContext.Provider>
                </div>
                <div className="footer">
                    {
                        this.state.footerDivs.map((divText, index) => {
                            return (
                                <div key={index}>
                                    {divText}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default LessonList
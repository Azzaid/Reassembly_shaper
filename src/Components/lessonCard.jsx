import React from "react";
import { MyContext } from "Scenes/LessonsList/LessonsList";
import styled from 'styled-components'
import {LESSON_STATUS} from "constants/lessons/lessonStatus";

const StyledLessonCard = styled.div`
  width: ${props => props.width}px;
  height: 400px;
  margin: 20px;
  background: ${props => {
    switch (props.status) {
      case LESSON_STATUS.completed :
          return "aliceblue"
      case LESSON_STATUS.pending :
        return "yellow"
      case LESSON_STATUS.missed :
        return props.theme.missedColor
    }  
  }};
  
  
  .header {
    font-size: 20px;
  }
`

class LessonCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("render lesson", this.props.status);

        return (
            <StyledLessonCard width={this.props.width || 200} status={this.props.status}>
                <MyContext.Consumer>
                    {value => <div className={`header ${this.props.status}`}>{value}</div>}
                </MyContext.Consumer>
                <div>{this.props.description}</div>
                <div>{this.props.date}</div>
            </StyledLessonCard>
        )
    }
}

export default LessonCard
import React from "react";
import PropTypes from 'prop-types';

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

/**
 *
 * @example
 * <LessonCard
 * name={"lesson 1"}
 * width={123}
 * status={LESSON_STATUS.pending}/>
 */
class LessonCard extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            secretName: "lesson1"
        }
    }

    render() {
        const {name, width, status, description, date} = this.props;

        return (
            <StyledLessonCard width={width} status={status}>
                <div className={`header ${status}`}>{name}</div>
                <div>{description}</div>
                <div>{date}</div>
                {/*<MyContext.Consumer>
                    {updateModalContext => (
                            <button type={"button"} onClick={() => {
                                updateModalContext(
                                    <div>
                                        Mama! I'm in television!
                                        <button type={"button"} onClick={() => {updateModalContext(false)}}>Close modal</button>
                                    </div>
                                )
                            }}>
                                Open modal
                            </button>
                        )
                    }
                </MyContext.Consumer>*/}
            </StyledLessonCard>
        )
    }
}

LessonCard.propTypes = {
    /**
     * width of component in pixels
     */
    width: PropTypes.number.isRequired,
    name: PropTypes.string,
}

LessonCard.defaultProps = {
    width: 200
}

export default LessonCard
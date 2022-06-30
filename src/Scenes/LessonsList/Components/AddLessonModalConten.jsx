import React from "react";
import styled from 'styled-components'

class AddLessonModalContent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            newLessonName: ""
        }
    }

    render() {
        const {newLessonName} = this.state
        const {addLesson, updateModalContext} = this.props

        return (
                <div>
                    <input onChange={(e) => {this.setState({newLessonName:e.target.value})}}
                           value={newLessonName}/>
                    <button type={"button"} onClick={() => {addLesson({name: newLessonName})}}>Add lesson</button>
                    <button type={"button"} onClick={() => {updateModalContext(false)}}>Cancel</button>
                </div>
            )
    }
}

export default AddLessonModalContent
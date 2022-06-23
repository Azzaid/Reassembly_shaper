import React from "react";

class LessonCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("render lesson", this.props.name);

        return (
            <div className="body">
                <div>{this.props.name}</div>
                <div>{this.props.description}</div>
                <div>{this.props.date}</div>
            </div>
        )
    }
}

export default LessonCard
//node modules
import React from "react";

//components
import AppBody from "./AppBody.jsx";
import LessonCard from "components/LessonCard/lessonCard";

//assets / helpers

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header 1",
            footerDivs: [],
        }
    }

    setAnotherHeader(string) {
        this.setState((state) => {return ({header:state.header + string})}, () => {
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
                        <AppBody setAnotherHeader={this.setAnotherHeader.bind(this)}/>  bind call apply
                        <LessonCard name={"lesson 1"}/>
                        <LessonCard name={"lesson 2"}/>
                        <LessonCard name={"lesson 3"}/>
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

export default App
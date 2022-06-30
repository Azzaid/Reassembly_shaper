import React from "react"

import { MyContext } from "HOC/GlobalModalProvider";

const withModalContext = (Component) => {
    return class extends React.Component{
        constructor(props) {
            super(props);
        }

        render () {
            return (
                <MyContext.Consumer>
                    {updateModalContext => (
                        <Component {...this.props} updateModalContext={updateModalContext}/>
                    )}
                </MyContext.Consumer>
            )
        }
    }
}

export default withModalContext
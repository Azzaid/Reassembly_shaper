import React from "react"
import styled from "styled-components"

export const MyContext = React.createContext("Oops error default value");

const StyledModal = styled.div`
    position: absolute;
  top: 20%;
  left: 40%;
  background-color: cadetblue;
`

class GlobalModalProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalContext: false
        }
    }

    updateModalContext(newModalContext) {
        this.setState({modalContext: newModalContext})
    }


    render() {
        const { modalContext } = this.state;

        return (
            <MyContext.Provider value={(modalContext) => {this.setState({modalContext})}}>
                {modalContext &&
                    <StyledModal>
                        {modalContext}
                    </StyledModal>
                }
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default GlobalModalProvider